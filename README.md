# node-koa-mongo-docker

Simply docker node|koa|mongo docker container

```
$ ./run_docker.sh
$ docker attach nkmd
```

in docker container:
```
$ cd /var/www/node_koa_mongo_docker
$ node app/index.js
```

at local pc check this:
```
$ curl http://localhost:8877/api/v1/
```

Good luck!
