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
  echo $fname
  for line in $(cut -d',' -f2,3 $file)
  do

    mp3=$(echo $line   | cut -d ',' -f1)
    char=$(echo $line | cut -d ',' -f2)
    index=$(($index + 1))

    for subindex in 1 2 3
    do
       cat $sdir/$mp3.mp3 >> tmp/$index.$char.3.mp3
    done
    sleep 1
  done
  cat $tmp/*mp3 > $dist/$fname.mp3
  sleep 1
  rm -rf $tmp/*.mp3
done



# files=$(ls ./all/*csv | grep -v all.csv)
# for file in $files
# do
#   bf=$(basename $file)  # パス情報を削除
#   fname=${bf%.*}        # 拡張子を削除  
#   index=1000
#   slines=$(cut -d',' -f2,3 $file)
#   for sline in $slines
#   do
#     mp3=$(echo ${sline} | cut -d ',' -f1)
#     char=$(echo ${sline} | cut -d ',' -f2)
#     index=$(($index + 1))
#     for subindex in 1 2 3
#     do
#        cat "$sdir/$mp3.mp3" >> "tmp/$index.$char.3.mp3"
#     done
#     sleep 3
#   done
# done
