import { Command, FileSystem, Path } from '@effect/platform';
import {
  NodeContext,
  NodeFileSystem,
  NodeRuntime,
} from '@effect/platform-node';
import { Effect } from 'effect';
import { tmpdir } from 'node:os';
import { ItemJSONDecoder } from './schema';

const CRAFTABLES = [
  'Ammunition',
  'Assault Rifle',
  'Augment',
  'Battle Rifle',
  'Hand Cannon',
  'LMG',
  'Material',
  'Modification',
  'Pistol',
  'Quick Use',
  'Refined Material',
  'Shield',
  'Shotgun',
  'SMG',
  'Sniper Rifle',
] as const;

type Craftable = (typeof CRAFTABLES)[number];

export const isCraftable = (s: string): s is Craftable => {
  return (CRAFTABLES as readonly string[]).includes(s);
};

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
  const dest = path.join(arcPath, 'repo');

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
    return yield* ItemJSONDecoder(content);
  });

const processAll = (dir: string) =>
  Effect.gen(function* () {
    const path = yield* Path.Path;
    const filenames = yield* listFiles(dir);

    const [failures, successes] = yield* Effect.partition(
      filenames,
      (filename) => {
        const fullPath = path.join(dir, filename);
        return readAndValidateFile(fullPath).pipe(
          Effect.mapError((err) => ({ filename, error: err })),
        );
      },
    );

    // Log failures with filenames
    yield* Effect.forEach(failures, (f) =>
      Effect.logError(`Failed to decode ${f.filename}: ${String(f.error)}`),
    );

    // Build a plain object from successful items (suitable for JSON serialization)
    const itemsObject = yield* Effect.sync(() =>
      successes.reduce((acc: Record<string, unknown>, s) => {
        if (!isCraftable(s.type)) {
          return acc;
        }
        acc[s.id] = s;
        return acc;
      }, {}),
    );

    return itemsObject;
  });

const program = Effect.gen(function* () {
  const path = yield* Path.Path;
  const fs = yield* FileSystem.FileSystem;

  const repoDir = yield* fetchRepoToTemp;
  const itemsDir = path.join(repoDir, 'items');
  const results = yield* processAll(itemsDir);

  // Write results to disk as JSON for use in the React app
  const outDir = path.join('.', 'src', 'data');
  const outFile = path.join(outDir, 'items.ts');

  const dirExists = yield* fs.exists(outDir);
  if (!dirExists) {
    yield* fs.makeDirectory(outDir);
  }

  const json = JSON.stringify(results, null, 2);
  const finalStr = `
  import { Item } from "scripts/schema";

  export const items: Record<string, Item> = ${json} as const;
  `;
  yield* fs.writeFileString(outFile, finalStr);

  yield* Effect.logInfo(`Wrote ${outFile}`);
});

NodeRuntime.runMain(
  program.pipe(
    Effect.provide(NodeContext.layer),
    Effect.provide(NodeFileSystem.layer),
  ),
);
