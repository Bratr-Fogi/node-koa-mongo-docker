#!/bin/bash

PWD=$(pwd);

docker stop nkmd;
docker rm nkmd;
docker build -t node_koa_mongo_docker:latest .;

docker run -tid -p 8877:8877 -v $PWD:/var/www/node_koa_mongo_docker --name nkmd node_koa_mongo_docker;

docker exec nkmd bash -c "service mongodb start";
docker exec nkmd bash -c "cd /var/www/node_koa_mongo_docker";
