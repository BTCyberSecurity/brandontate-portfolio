import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
function load(path) {
 const js = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
 const exports = {};
 new Function('exports', js)(exports);
 return exports;
}
const { runRecovery, initialRecovery } = load('src/lib/recovery-game.ts');
const { recoveryCopy } = load('src/lib/recovery-copy.ts');
for (const locale of ['en', 'es', 'ja', 'ru', 'zh', 'hi']) {
 assert.deepEqual(Object.keys(recoveryCopy[locale]).sort(), Object.keys(recoveryCopy.en).sort());
 assert.equal(recoveryCopy[locale].steps.length, 4);
 for (const value of Object.values(recoveryCopy[locale])) assert(value.length > 0);
}
let state = { ...initialRecovery };
assert.equal(runRecovery(state, 'restore route').message, 'blocked');
assert.equal(runRecovery(state, 'ping destination').message, 'failed');
state = runRecovery(state, ' route ').state;
assert.equal(runRecovery(state, 'restore route').message, 'blocked');
state = runRecovery(state, 'PING   GATEWAY').state;
state = runRecovery(state, 'restore route').state;
assert.equal(state.verified, false);
state = runRecovery(state, 'ping destination').state;
assert.equal(state.verified, true);
assert.deepEqual(runRecovery(state, 'cls').state, state);
assert.equal(runRecovery(state, 'sudo make coffee').message, 'coffee');
assert.deepEqual(runRecovery(state, 'reset').state, initialRecovery);
assert.equal(runRecovery(state, '<script>alert(1)</script>').message, 'unknown');
assert.deepEqual(initialRecovery, { gateway: false, inspected: false, restored: false, verified: false });
console.log('PASS: recovery progression, diagnosis gates, command normalization, reset, clear, unknown input, and six-language copy coverage.');
