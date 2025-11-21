import { Command, FileSystem } from '@effect/platform';
import {
  NodeContext,
  NodeFileSystem,
  NodeRuntime,
} from '@effect/platform-node';
import { Console, Effect } from 'effect';
import { ItemDecoder } from './schema.ts';

// TODO: if data exists, don't make new dir
const createTmpDir = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const dir = yield* fs.makeTempDirectory({ prefix: 'arc-' });
  return dir;
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
    'https://github.com/RaidTheory/arcraiders-data.git',
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
      Console.log(`Reading ${fullPath}`);
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
