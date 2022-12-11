const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  await merger.add('NFA.pdf');  
  await merger.add('Modern round ciphers.pdf'); 
  await merger.save('merged.pdf'); 
})();