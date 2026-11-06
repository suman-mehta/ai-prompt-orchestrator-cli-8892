import test from 'node:test';
import assert from 'node:assert/strict';
import { writeFile, readFile, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const cliPath = resolve('src', 'index.js');

test('CLI merges template with context and exits with code 0', async (t) => {
  const tmpDir = resolve('test', 'tmp');
  await writeFile(resolve(tmpDir, 'template.txt'), 'Hello {{name}}, your task is {{task}}.');
  await writeFile(resolve(tmpDir, 'context.json'), JSON.stringify({ name: 'Alice', task: 'review code' }));

  const result = spawnSync('node', [cliPath, '--template', resolve(tmpDir, 'template.txt'), '--context', resolve(tmpDir, 'context.json')], { encoding: 'utf8' });

  assert.equal(result.status, 0, 'Process should exit with code 0');
  assert.match(result.stdout, /Hello Alice, your task is review code\./, 'Output should contain merged prompt');

  await rm(resolve(tmpDir, 'template.txt'));
  await rm(resolve(tmpDir, 'context.json'));
});