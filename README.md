# Armenian AI Toolkit 🇦🇲

Small, dependency-free JavaScript utilities for Armenian-language text in AI applications.

**Status:** early open-source starter (v0.1.0). Contributions and linguistic review welcome.

## Features
- Deterministic Armenian-script to Latin transliteration (basic character mapping)
- Armenian-script detection
- Unicode whitespace normalization
- Unicode code-point counting

No API keys, external services, tracking, or network requests.

## Requirements
Node.js 18 or newer.

## Quick start
```bash
git clone https://github.com/arsenmuradyan-oss/armenian-ai-toolkit.git
cd armenian-ai-toolkit
npm test
```

```js
import { transliterateArmenian, containsArmenian, normalizeWhitespace } from './src/index.js';

console.log(transliterateArmenian('Բարև')); // Barev
console.log(containsArmenian('Բարև')); // true
console.log(normalizeWhitespace(' Բարև   աշխարհ ')); // Բարև աշխարհ
```

## Important limitations
Transliteration is **not** a pronunciation engine, a reversible encoding, a spellchecker, or a safety/moderation filter. Armenian dialects and transliteration conventions differ; verify outputs with native speakers before production use. Do not use these helpers to make safety-critical decisions.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md). Tests run with `npm test` and in GitHub Actions.

## License
MIT. See [LICENSE](LICENSE).

Created as an independent public community toolkit. It contains no PATUM.AI private code.
