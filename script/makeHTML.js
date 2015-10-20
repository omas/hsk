// 0:level,1:mp3,2:漢字,3:pinyin,4:品詞,5:意味,6:
'use strict';
(function(stdin) {
  var lines = stdin.toString().trim().split('\n');
  var result = (function(data) {
    var initial;
    return data.map(function(line) {
      var ch = line[6].charAt(0).toUpperCase();
      if (ch !== initial) {
        initial = ch;
        return open_section(ch);
      } else {
        return open_article(line);
      }
    });
  })(lines.map(function(v) {
    return v.split(',')
  }));


  console.log([
    open_header()
    ,open_main()
    ,result.join('\n')
    ,close_main()
    ].join('\n')
  );

// 0:level,1:mp3,2:漢字,3:pinyin,4:品詞,5:意味,6:
  function open_article(cols) {
    return [
      '<article class = "l' + cols[0] + ' pull-left">'
      , '<h1 class = "pinyin"> □ ' + cols[3], '<span class = "small">'
      , '[ -', cols[7], '- ]', '</span>', '</h1>'
      , ' <h2 class = "mean">',cols[2] , '<span class = "small">','(' + cols[4] + ')', cols[5], '</span>','</h2>', '</article>'
    ].join(' ');
  }

  function open_section(title) {
    return [
      '</section>', '<section class = "clearfix">', '<header>', '<h1>' + title + '</h1>', '</header>'
    ].join('\n');
  }
  function open_header() {
    return [
'<!DOCTYPE html>'
,'<meta charset="utf-8">'
,'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
,'<meta name="viewport" content="width=device-width, initial-scale=1">'
,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'
,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">'
,'<link rel="stylesheet" href="hsk.css">'
,'<title>HSK 1-4 class words</title>'
    ].join('\n');
  }
  function open_main() {
    return '<main class = "malti">\n';
  }

  function close_main() {
    return '</section>\n</main>\n';
  }
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
