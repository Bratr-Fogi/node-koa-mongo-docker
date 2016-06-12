FROM ubuntu:14.04

MAINTAINER developer@lundegaard.eu

# Keep upstart from complaining
RUN dpkg-divert --local --rename --add /sbin/initctl
RUN ln -sf /bin/true /sbin/initctl

# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start.
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

# Update and install required packages
RUN apt-get update -y --fix-missing

# node.js
RUN apt-get install -y python g++ curl imagemagick build-essential apt-transport-https vim

# install node.js
RUN echo "deb https://deb.nodesource.com/node_6.x trusty main" | tee /etc/apt/sources.list.d/nodejs.list
RUN echo "deb-src https://deb.nodesource.com/node_6.x trusty main" >> /etc/apt/sources.list.d/nodejs.list
RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN apt-get update -y
RUN apt-get install -y nodejs

# install mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update -y
RUN apt-get install -y mongodb
