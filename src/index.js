/** Small, dependency-free Armenian text helpers. No network requests. */
const UPPER = 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ';
const LOWER = 'աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ';
const LATIN = ['a','b','g','d','ye','z','e','ə','tʰ','zh','i','l','kh','ts','k','h','dz','gh','ch','m','y','n','sh','vo','chʰ','p','j','rr','s','v','t','r','tsʰ','w','pʰ','kʰ','o','f'];
const map = new Map([...LOWER].map((c,i)=>[c,LATIN[i]]));
for (const [i,c] of [...UPPER].entries()) map.set(c, LATIN[i][0].toUpperCase()+LATIN[i].slice(1));
/** Deterministic character-by-character transliteration, not phonetic speech synthesis.
 * Armenian digraph ու is rendered as u; other characters are preserved. */
export function transliterateArmenian(value) {
  if (typeof value !== 'string') throw new TypeError('Expected a string');
  return value.normalize('NFC').replace(/Ու|ու|ՈՒ|[\u0531-\u0556\u0561-\u0586]/gu, c => {
    if (c === 'ու') return 'u';
    if (c === 'Ու' || c === 'ՈՒ') return 'U';
    return map.get(c) ?? c;
  });
}
/** Unicode-safe whitespace normalization. */
export function normalizeWhitespace(value) {
  if (typeof value !== 'string') throw new TypeError('Expected a string');
  return value.normalize('NFC').replace(/\s+/gu, ' ').trim();
}
/** Returns true if the text contains at least one Armenian-script letter. */
export function containsArmenian(value) {
  if (typeof value !== 'string') throw new TypeError('Expected a string');
  return /[\u0531-\u0556\u0561-\u0587]/u.test(value);
}
/** Count Unicode code points (not UTF-16 units). */
export function codePointLength(value) {
  if (typeof value !== 'string') throw new TypeError('Expected a string');
  return [...value].length;
}
