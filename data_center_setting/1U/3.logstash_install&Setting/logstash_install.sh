rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

# elk. repo 생성
echo "[Elastic-7.x]
name=Elastic repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md">/etc/yum.repos.d/Elastic.repo

# Logstash 설치
yum install -y logstash-7.10.1

# 서비스 등록
systemctl enable logstash.service
systemctl start logstash.service

