#!/bin/bash

IFS=$'\n'
rm -rf tmp/*.mp3

sdir=./mp3/words/
dist=./work/
tmp=./tmp
files=$(ls ./all/*csv | grep -v all.csv)
for file in $files
do
  fname="$(basename $file .csv)"
  index=1000
  mkdir -p $dist$fname
  for line in $(cut -d',' -f2,3 $file)
  do

    mp3=$(echo $line   | cut -d ',' -f1)
    char=$(echo $line | cut -d ',' -f2)
    index=$(($index + 1))

    for subindex in 1 2 3
    do
      cat $sdir/$mp3.mp3 >> $dist/$fname/$index.$char.3.mp3
    done
    sleep 1
  done
#  cat $tmp/*mp3 > $dist/$fname.mp3
#  rm -rf $tmp/*.mp3
done