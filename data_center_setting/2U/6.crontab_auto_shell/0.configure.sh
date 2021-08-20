mkdir /root/json
mv /root/data_center/data_center_setting/2U/6.crontab_auto_shell/1.2u_server_info.sh /root/json/2u_server_info.sh
echo "* * * * *  sleep 30; /root/json/2u_server_info.sh
* * * * *  sleep 60; /root/json/2u_server_info.sh" > /var/spool/cron/root 


