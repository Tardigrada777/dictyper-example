const { DictionaryParser } = require('dictyper');
const { join } = require('path');
 
const d = new DictionaryParser(join(__dirname, './src/assets/dict/en.json'));
d.generate(join(__dirname, './src'));
