'use strict';
var contents = (function(stdin) {
  var lines  = stdin.toString().trim().split('\n').map(function(v) { return v.split(',')});
 var initial = '1';
  return  lines.map(function(line) {
   var ch = line[7];

    if (ch !== initial) {
      initial = ch;
      return openSection(ch,line);
    }
    return openArticle(line);
  }).join('');
}(require('fs').readFileSync('/dev/stdin', 'utf8')));

function main(contents) {
  var result = [];
  result.push(open());
  result.push(contents);
  result.push(close());
  return result.join('');
}

function line1(pinyin,wordclass) {
  return [
    '<h4 class = "pinyin">' , pinyin
    ,'<span class = "small">'
    ,'(', wordclass , ')'
    ,'</span>' 
    ,'</h4>'
  ].join(' ');
}

function line2(tone,charactor) {
  return [
    '<h4 class = "">'
    ,'<span class = "small">'
    ,'[', tone , ']'
    ,'</span>' 
    ,charactor
    ,'</h4>'
  ].join(' ');
}

function articleP(means) {
  return [
    '<p class = "mean">'
    , means
    ,'</p>'
  ].join(' ');
}

function openArticle(cols) {
  return [
    '<article class = "l' + cols[0] , 'pull-left">'
    , line1(cols[3],cols[4])
    , line2(cols[7],cols[2])
    , articleP(cols[5])
    ,'</article>'
  ].join(' ');
}

function openSection(initial,cols) {
  return [
    '</section>'
    , '<section class = "clearfix">'
    , '<header>'
    , '<h2 title = "initial">' + initial + '</h2>'
    , '</header>'
    , openArticle(cols)
  ].join(' ');
}

function open() {
    return [
'<!DOCTYPE html>'
,'<meta charset="utf-8">'
,'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
,'<meta name="viewport" content="width=device-width, initial-scale=1">'
,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'
,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">'
,'<link rel="stylesheet" href="hsk.css">'
,'<title>HSK 1-4 class words</title>'
,'<main class = "contents">\n'
, '<section class = "clearfix">'
, '<header>'
//, '<h2 class = "initial">A</h2>'
, '<h2 class = "initial">1</h2>'
, '</header>'
    ].join('\n');
}

function close() {
  return '</section>\n</main>\n';
}

console.log(main(contents));
