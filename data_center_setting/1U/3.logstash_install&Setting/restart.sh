#!/bin/bash

while [ 1 ]
do
    pid=`ps -ef | grep "logstash" | grep -v 'grep' | awk '{print $2}'`

    if [ -z $pid ]
    then
        nohup /usr/share/logstash/bin/logstash
    fi
    sleep 2
done
