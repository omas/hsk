'use strict';

var toneTable = {
  1:'1', 2:'2', 3:'3', 4:'4', 5:'5'
  , 11:'11', 12:'12', 13:'13', 14:'14', 15:'15'
  , 21:'21', 22:'22', 23:'23', 24:'24', 25:'25'
  , 31:'31', 32:'32', 33:'33', 34:'34', 35:'35'
  , 41:'41', 42:'42', 43:'43', 44:'44', 45:'45'
  , 111:'111', 112:'112', 113:'113'
  , 122:'122', 124:'124'
  , 211:'211', 212:'212', 213:'213', 215:'215'
  , 224:'224', 242:'242'
  , 245:'245'
  , 251:'251', 252:'252'
  , 311:'311', 314:'314'
  , 322:'322'
  , 331:'331'
  , 343:'343', 344:'344'
  , 354:'354'
  , 414:'414'
  , 421:'421', 424:'424', 425:'425'
  , 433:'433', 434:'434'
  , 441:'441', 442:'442', 443:'443', 444:'444'
  , 451:'451', 453:'453'
  , 1441:'1441'
  , 4324:'4324'
};

var tone = toneTable[1];

(function(stdin) {
  var lines = stdin.toString().trim().split('\n');
  var result = (function(tone,data) {
    return data.filter(function(v) {
      return v[0] !== '4' && v[7] === tone;
    }).join('\n')
  }(tone,lines.map(function(line) {
    return line.split(',')
  }
  )));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
