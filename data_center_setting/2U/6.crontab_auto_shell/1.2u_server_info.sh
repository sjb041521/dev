#!/bin/bash
osqueryi --json  'select t.datetime as timestamp,(sum(d.blocks-d.blocks_free)*4) as diskused, (sum(d.blocks_free)*4) as diskavailable, m.memory_total as mtotal , (m.memory_free+m.buffers+m.cached) as mAvailable, (m.memory_total-(m.memory_free+m.buffers+m.cached)) as musage from memory_info m join mounts d join time t where d.path="/" or d.path="/home"' > /root/json/test.json

awk 'NR==2||NR>3' /root/json/test.json > /root/json/server02.json
now=server02_$(date +%Y)
curl -u "elastic":"rTraEO3lhGv1d2Hz92UY" -XPOST 'https://localhost:9200/'"$now"'/_doc/?pretty' -H 'Content-Type: application/json' -d @/root/json/server02.json --cacert /root/docker/ES_cert/ca.crt
