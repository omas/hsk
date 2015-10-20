#!/bin/bash

IFS=$'\n'
index=1000
files="$(ls $1/*mp3)"
for file in $files
do
  counter=0
  while [ $counter -lt $2 ]
  do
    echo "${file}" "tmp/$index.$counter.mp3"
    counter=$(($counter + 1))
  done
  index=$(($index + 1))
done
sleep 3
cat tmp/*mp3 > "$1.$2.mp3"
rm tmp/*
