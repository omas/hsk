'use strict';

var toneTable = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  21: '21',
  22: '22',
  23: '23',
  24: '24',
  25: '25',
  31: '31',
  32: '32',
  33: '33',
  34: '34',
  35: '35',
  41: '41',
  42: '42',
  43: '43',
  44: '44',
  45: '45',
  111: '111',
  112: '112',
  113: '113',
  122: '122',
  124: '124',
  211: '211',
  212: '212',
  213: '213',
  215: '215',
  224: '224',
  242: '242',
  245: '245',
  251: '251',
  252: '252',
  311: '311',
  314: '314',
  322: '322',
  331: '331',
  343: '343',
  344: '344',
  354: '354',
  414: '414',
  421: '421',
  424: '424',
  425: '425',
  433: '433',
  434: '434',
  441: '441',
  442: '442',
  443: '443',
  444: '444',
  451: '451',
  453: '453',
  1441: '1441',
  4324: '4324'
};

(function(stdin) {
  var lines = stdin.toString().trim().split('\n')
    .map(function(v) {
      return v.split(',');
    });

  var fn = (function(data) {
    return function(tone) {
      return data.filter(function(v) {
        return v[7] === tone;// && v[0] != '4';
      }).join('\n')
    };
  })(lines);

  var result = [];
  for (var tone in toneTable) {
//    result.push([,,,,,,,,])
//    result.push([toneTable[tone],,,,,,,]);
    result.push(fn(toneTable[tone]));
  }

 console.log(result.join('\n'));

}(require('fs').readFileSync('/dev/stdin', 'utf8')));

