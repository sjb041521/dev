FROM centos:centos7.9.2009
MAINTAINER JWUC
LABEL version='1.0'

USER root

RUN yum -y update && yum -y install curl

# INSTALL NPM & NODS.JS
RUN yum -y install epel-release
RUN yum -y install npm node.js

# INSTALL npm
RUN mkdir /etc/JWUCdashboard
WORKDIR /etc/JWUCdashboard
RUN mkdir ./react_cert
RUN mkdir ./ES_cert
RUN npm install

# chart module install
RUN npm install apexcharts --save
RUN npm install react-apexcharts apexcharts
RUN npm install npm-run-all --save

# CHANGE NODE.JS VERSION
RUN npm cache clean --force
RUN npm install -g n
RUN n 10.23.2

# INSTALL YARN
RUN npm install -g yarn@1.22.10

# INSTALL CREATE-REACT-APP
RUN yarn global add create-react-app@4.0.3

# INSTALL MODULE for BACK-END
RUN yarn add elasticsearch@16.7.2
RUN npm install express@4.17.1 --save

# INSTALL MODULE
RUN yarn install

#COPY SOURCE FILE
ADD black-dashboard-react/ /etc/JWUCdashboard/
COPY ES_cert/ca.crt /etc/JWUCdashboard/ES_cert
COPY /react_cert/JWUC_sv.crt /etc/JWUCdashboard/react_cert
COPY /react_cert/JWUC_sv.key /etc/JWUCdashboard/react_cert

CMD yarn start
