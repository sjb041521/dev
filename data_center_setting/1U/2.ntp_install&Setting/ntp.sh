yum install -y ntp
echo "server 1.kr.pool.ntp.org
server 0.asia.pool.ntp.org
server 2.asia.pool.ntp.org" > /etc/ntp.conf
systemctl start ntpd
systemctl enable ntpd

