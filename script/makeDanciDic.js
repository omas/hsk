'use strict';
(function(stdin) {
  var lines  = stdin.toString().trim().split('\n');
  var result = (function(data) {

    return data.map(function(v) {
      var d = v.split(',');
      return d[2] + ' /// ' + d[6].replace(/\s+/g, "") + ' \\ ' + d[5];
    }).join('\n');

  }(lines
  ));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));