###  Welcome to first Docker Project

## 1. Building the docker image
```
$ docker build -t <docker-or-image-name>:<tagname> . 

// -t represents custom tag for giving custom name to docker image

$ docker build -t pradeep/dockerdemonode:firstimage1.0.1 .

```

## 2. Seeing the docker images
```
$ docker images

REPOSITORY               TAG               IMAGE ID       CREATED              SIZE
pradeep/dockerdemonode   firstimage1.0.2   38ae86566610   About a minute ago   1.62GB
pradeep/dockerdemonode   firstimage1.0.1   db89ed989d11   13 minutes ago       1.62GB

```

## 3. Running the docker images
```
$ docker run <docker-or-image-name>:<tagname>
```

````
$ docker run pradeep/dockerdemonode:firstimage1.0.1 //blocks the terminal & can't use for other purposes

-> D:\Node\Docker_Demo_Node>docker run pradeep/dockerdemonode:firstimage1.0.1
Sever started at PORT >> 5001
````

```
$ docker run -d pradeep/dockerdemonode:firstimage1.0.1 //to run the conatiner in the background without blocking the terminal; -d means detached

-> C:\Users\Pradeep>docker run -d pradeep/dockerdemonode:firstimage1.0.1
ad0a32b9c56d2adfc37f18eccbfc630ec290031946ca71d60f0399a9694154a5

-> C:\Users\Pradeep>
```

## 4. Running the docker images by mapping the port
```
$ docker run -d -p <host-port>:<container-port> <docker-name>:<tagname> //-p implies port mapping

$ docker run -d -p 5002:5001 pradeep/dockerdemonode:firstimage1.0.1

http://localhost:5002/

$ docker logs 8c47

```

## 5. To see the running containers
```
$ docker ps

CONTAINER ID   IMAGE                                    COMMAND                  CREATED          STATUS          PORTS                              NAMES
8c476680ffd1   pradeep/dockerdemonode:firstimage1.0.1   "docker-entrypoint.s…"   8 seconds ago    Up 6 seconds    3001/tcp, 0.0.0.0:5002->5001/tcp   upbeat_chandrasekhar
ad0a32b9c56d   pradeep/dockerdemonode:firstimage1.0.1   "docker-entrypoint.s…"   9 minutes ago    Up 9 minutes    3001/tcp                           eager_hopper
b427b8d53fdb   pradeep/dockerdemonode:firstimage1.0.1   "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   3001/tcp  

```

## 6.Stopping the running instance
```
$ docker stop <container-name>
```

## 7. List all container: running/ closed
```
$ docker ps -a

CONTAINER ID   IMAGE                                    COMMAND                  CREATED       STATUS                            PORTS     NAMES
ba3b82c96d3a   pradeep/dockerdemonode:firstimage1.0.1   "docker-entrypoint.s…"   2 hours ago   Exited (137) About a minute ago             testv1
```

## 8. Logs of container
```
$ docker logs <container-id>

$ docker logs ba3b82c96d3a
```

## 9. Push the image to docker repo after creating repo 
```
$ docker tag <local-image>:<tagname> <new-repo>:<tagname>

$ docker push <new-repo>:tagname

$ docker push ipradeep/node-container-demo:tagname

$ docker tag pradeep/dockerdemonode:firstimage1.0.1 ipradeep/node-container-demo:firstimage1.0.1

$ docker push ipradeep/node-container-demo:firstimage1.0.1

```

## 10. Pull the image from docker repo
```
$ docker pull postgres //db

$ docker pull ipradeep/node-container-demo:firstimage1.0.1 //pulling the repo image

```