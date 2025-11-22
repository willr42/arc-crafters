import { Command, FileSystem, Path } from '@effect/platform';
import {
  NodeContext,
  NodeFileSystem,
  NodeRuntime,
} from '@effect/platform-node';
import { tmpdir } from 'node:os';
import { Effect } from 'effect';
import { ItemDecoder } from './schema.ts';

const createTmpDir = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;

  const tmpDirPath = tmpdir();
  const arcPath = path.join(tmpDirPath, 'arc-data');
  if (fs.exists(arcPath)) {
    yield* Effect.logInfo(`${arcPath} already exists`);
    return arcPath;
  }
  yield* Effect.logInfo(`Creating dir at ${arcPath}`);
  yield* fs.makeDirectory(arcPath);

  return arcPath;
});

const cloneRepo = (repo: string, dest: string) => {
  return Effect.gen(function* (_) {
    yield* Effect.logInfo(`Cloning ${repo} into ${dest}`);

    const cmd = Command.make('git', 'clone', '--depth=1', repo, dest);
    const output = yield* Command.string(cmd);

    yield* Effect.logInfo(`Clone complete: ${dest}`);

    return { dest, output };
  });
};

const fetchRepoToTemp = Effect.gen(function* (_) {
  const tmpDir = yield* createTmpDir;
  const dest = `${tmpDir}/repo`;
  const result = yield* cloneRepo(
    // FIXME: env var for data source
    'https://github.com/willr42/arcraiders-data.git',
    dest,
  );

  return result;
});

const listFiles = (dir: string) =>
  Effect.gen(function* (_) {
    const fs = yield* FileSystem.FileSystem;
    const files = yield* fs.readDirectory(dir);
    return files.filter((f) => f.endsWith('.json'));
  });

const readAndValidateFile = (filepath: string) =>
  Effect.gen(function* (_) {
    const fs = yield* FileSystem.FileSystem;
    yield* Effect.logInfo(`Reading file: ${filepath}`);
    const content = yield* fs.readFileString(filepath);
    const decode = yield* ItemDecoder(content);
    return decode;
  });

const processAll = (dir: string) =>
  Effect.gen(function* (_) {
    const filenames = yield* listFiles(dir);
    const results = yield* Effect.forEach(filenames, (filename) => {
      const fullPath = `${dir}/${filename}`;
      return readAndValidateFile(fullPath);
    });
    return results;
  });

const program = Effect.gen(function* (_) {
  const { dest: repoDir } = yield* fetchRepoToTemp;
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
