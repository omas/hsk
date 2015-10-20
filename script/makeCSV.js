'use strict';
var __ = require('underscore');

var tr = function(from, to) {
  return function(word) {
    return word.replace(new RegExp('[' + from.join('') + ']', 'g'),
      function(ch) {
        return to[from.indexOf(ch)];
      });
  }
}

var pinyinTable = [
  'ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò'
  , 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì'
  , 'ū', 'ú', 'ǔ', 'ù', 'ǖ', 'ǘ', 'ǚ', 'ǜ'
];

var pinyinNumber = [
  'a1', 'a2', 'a3', 'a4', 'o1', 'o2', 'o3', 'o4'
  , 'e1', 'e2', 'e3', 'e4', 'i1', 'i2', 'i3', 'i4'
  , 'u1', 'u2', 'u3', 'u4', 'ü1', 'ü2', 'ü3', 'ü4'
];

var pinyinToNumber = tr(pinyinTable,pinyinNumber);

// 0:level,1:mp3,2:漢字,3:pinyin,4:品詞,5:意味

(function(stdin) {
  var lines = stdin.toString().trim().split('\n');
  var result = (function(data) {
    var p = data.map(function(line) {
      return pinyinToNumber(line[3]).split(' ')
        .map(function(v) {
          return (/\d/g.test(v)) ? v : v + '5';
        }).join(' ').split('\n')
        .map(function(v) {
          return [v,v.match(/\d/g).join('')].join();
        });
    });
    return __.zip(data,p)
      .join('\n')
      .split('\n')
      .sort(function(a,b) {
        a = a.split(',')[6].toLowerCase();
        b = b.split(',')[6].toLowerCase();
        if (a < b) return -1;
        if (a > b) return  1;
        return 0;
      }).join('\n');
  }(lines.map(function(line) {
    return line.split(',')
  })));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
