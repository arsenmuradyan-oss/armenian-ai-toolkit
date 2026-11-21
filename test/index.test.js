import test from 'node:test';
import assert from 'node:assert/strict';
import { transliterateArmenian, normalizeWhitespace, containsArmenian, codePointLength } from '../src/index.js';

test('Armenian letters and digraph', () => {
  assert.equal(transliterateArmenian('Բարև'), 'Bareվ');
  assert.equal(transliterateArmenian('ուր'), 'ur');
  assert.equal(transliterateArmenian('Ուր'), 'Ur');
  assert.equal(transliterateArmenian('Hello 123'), 'Hello 123');
});
test('normalization', () => {
  assert.equal(normalizeWhitespace('  Բարև\n\tաշխարհ  '), 'Բարև աշխարհ');
  assert.equal(normalizeWhitespace(''), '');
});
test('script detection', () => {
  assert.equal(containsArmenian('Hi Հայաստան!'), true);
  assert.equal(containsArmenian('Hello'), false);
});
test('code points', () => {
  assert.equal(codePointLength('😀ա'), 2);
});
test('reject non-strings', () => {
  for (const fn of [transliterateArmenian, normalizeWhitespace, containsArmenian, codePointLength])
    assert.throws(() => fn(null), TypeError);
});
