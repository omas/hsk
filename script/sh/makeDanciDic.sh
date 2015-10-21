#!/bin/bash

IFS=$'\n'
exclude_dir="dic|."

dirs=$(find . -maxdepth 1 -type d | grep -v $exclude_dir)
for dir in $dirs
do
  files=$(ls $dir | grep csv$)
  for file in $files
  do
   node ./makeDanciDic.js < $dir/$file >> ./dic/$dir.dic
  done
done