#!/bin/bash

sed -e '
  s/ā/a1/g
  s/á/a2/g
  s/ǎ/a3/g
  s/à/a4/g
  s/ō/o1/g
  s/ó/o2/g
  s/ǒ/o3/g
  s/ò/o4/g
  s/ē/e1/g
  s/é/e2/g
  s/ě/e3/g
  s/è/e4/g
  s/ī/i1/g
  s/í/i2/g
  s/ǐ/i3/g
  s/ì/i4/g
  s/ū/u1/g
  s/ù/u2/g
  s/ǔ/u3/g
  s/ú/u4/g
  s/ǖ/ü1/g
  s/ǘ/ü2/g
  s/ǚ/ü3/g
  s/ǜ/ü4/g
'
