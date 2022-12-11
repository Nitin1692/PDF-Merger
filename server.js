const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  //await merger.add('NFA.pdf');  
  //await merger.add('Modern round ciphers.pdf');
  await merger.add('Simple Modern method of cryptography.pdf');  
  await merger.add('Traditional Method of cryptography.pdf');  
  await merger.save('output.pdf'); 
})();