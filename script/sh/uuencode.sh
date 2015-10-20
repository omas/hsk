#!/bin/bash

for file in ./*
do
 file_new=$(echo $file | tr % = | nkf -WwmQ)
 mv $file $file_new
done
