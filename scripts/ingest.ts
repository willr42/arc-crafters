import { Command, FileSystem, Path } from '@effect/platform';
import {
  NodeContext,
  NodeFileSystem,
  NodeRuntime,
} from '@effect/platform-node';
import { Effect } from 'effect';
import { tmpdir } from 'node:os';
import { ItemDecoder } from './schema';

const cloneRepo = (repo: string, dest: string) => {
  return Effect.gen(function* () {
    yield* Effect.logInfo(`Cloning ${repo} into ${dest}`);

    const cmd = Command.make('git', 'clone', '--depth=1', repo, dest);
    yield* Command.string(cmd);

    yield* Effect.logInfo(`Clone complete: ${dest}`);

    return { dest };
  });
};

const fetchRepoToTemp = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;

  const tmpDirPath = tmpdir();
  const arcPath = path.join(tmpDirPath, 'arc-data');
  const dest = `${arcPath}/repo`;

  const pathExists = yield* fs.exists(arcPath);

  if (pathExists) {
    yield* Effect.logInfo(`${arcPath} already exists`);
    return dest;
  } else {
    yield* Effect.logInfo(`Creating dir at ${arcPath}`);

    yield* fs.makeDirectory(arcPath);

    const result = yield* cloneRepo(
      // FIXME: env var for data source
      'https://github.com/willr42/arcraiders-data.git',
      dest,
    );

    return result.dest;
  }
});

const listFiles = (dir: string) =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const files = yield* fs.readDirectory(dir);
    return files.filter((f) => f.endsWith('.json'));
  });

const readAndValidateFile = (filepath: string) =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    yield* Effect.logInfo(`Reading file: ${filepath}`);
    const content = yield* fs.readFileString(filepath);
    const decoded = yield* ItemDecoder(content);
    return decoded;
  });

const processAll = (dir: string) =>
  Effect.gen(function* () {
    const filenames = yield* listFiles(dir);
    const results = yield* Effect.forEach(filenames, (filename) => {
      const fullPath = `${dir}/${filename}`;
      return readAndValidateFile(fullPath);
    });
    return results;
  });

const program = Effect.gen(function* () {
  const repoDir = yield* fetchRepoToTemp;
  const itemsDir = `${repoDir}/items`;
  const results = yield* processAll(itemsDir);
  yield* Effect.log(results);
});

NodeRuntime.runMain(
  program.pipe(
    Effect.provide(NodeContext.layer),
    Effect.provide(NodeFileSystem.layer),
  ),
);
