# Container Workshop Excercises

This excercise template is meant to used during **Container Workshop** by [pekkakorpi-tassi.fi](https://pekkakorpi-tassi.fi){:target="_blank"} or by using it for self-paced learning. The template is available for download from [container-workshop](https://github.com/){:target="_blank"} repository available on GitHub.

## Learn Docker CLI Commands

During the workshop or self-paced learning you can use generative AI and Docker resources to help you:

- [OpenAI ChatGPT](https://chat.openai.com/){:target="_blank"}
- [Google Bard](https://bard.google.com){:target="_blank"}
- [xAI Grok](https://grok.x.ai/){:target="_blank"}
- [Docker reference documentation](https://docs.docker.com/reference){:target="_blank"}
- [Docker CLI Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf){:target="_blank"}

### Basic Commands

```bash
# List Docker Images

# List Docker Containers

# List Docker Services

```

### Examine Running Container

```bash
# Connect to a running Container's CLI
docker exec -it lorem-ipsum-node sh

# Some example CLI commands to run on running Container
ls -la
pwd
whoami
printenv
ps aux
```

### Activate or Deactivate Swarm More for Container Orchestration

By default Docker is running in standalone Containers mode!
```bash
# Switch to Docker Swarm Mode for running Container services

# Leave Docker Swarm Mode for running standalone Containers

```

## lorem-ipsum-node

**lorem-ipsum-node** teaches how to run [Node.js](https://nodejs.org/en){:target="_blank"} application to deliver dynamic website/web service by using Docker.

### Naming Convention

```bash
# Decide name that you will consistently use with for IMAGE

# Always include tag latest AND incrementing version to your IMAGE name
:latest
:0.0.1

# Decide name that you will consistently use with for CONTAINER

# Decide name that you will consistently use with for SERVICE

```

### Build and Manage Docker Image

You are working with local Docker Image repository of Docker! For real work scenarios you will be using [Docker Hub](https://hub.docker.com){:target="_blank"}!

```bash
# List Docker Images

# Download Docker Image

# Build Docker Image

# Build Docker Image with latest and version tags

# Delete Docker Image

# Cleanup Docker Data

```

### Create, Stop, Start and Delete Docker Containers

You are working with standalone Docker containers and you are managing each container separately.

```bash
# List Docker Containers

# Create Container in attached mode

# Create Container in detached mode

# + add TCP port mapping

# + add passing of environmental variables

# + add exposing host OS folder within Container

# View Container Logs

# Stop Container

# Start Container

```

### Create, Scale Out, Scale In and Remove Docker Container Service

You are working with Docker Swarm container services and you are defining features of Container Service and Docker Swarm Orchestrator will manage Containers for you. Running Containers that constitute the Service are called Replicas.

```bash

# List Docker Services

# Create Service

# + add TCP port mapping

# + add passing of environmental variables

# + add exposing host OS folder within Containers

# View Service Logs

# Update Service

# Scale Up Service

# Scale Down Service

# Delete Service

```

### Testing Application

```bash
# Test application using curl...
curl http://host/lorem-ipsum
curl http://host/persistent-data/test.txt
curl http://host/persistent-data/test.html
curl http://host/persistent-data/<filename.txt>
curl http://host/print-env
curl http://host/replicaid

# ...or you can test application over the Internet!
```

## lorem-ipsum-nginx

**lorem-ipsum-nginx** teaches how to run [NGINX](https://www.nginx.com){:target="_blank"} web server to deliver static website by using Docker.

```bash
# Decide name that you will consistently use with for IMAGE

# Always include tag latest AND incrementing version to your IMAGE name
:latest
:0.0.1

# Decide name that you will consistently use with for CONTAINER

# Decide name that you will consistently use with for SERVICE

```

### Experiment With Learnings

Now you can apply what you learned with **lorem-ipsum-node** to **lorem-ipsum-nginx**! You can use following text area to build, manage and create containers or services commands that you require.

```bash
# Document your commands...

```

### Testing Web Server

```bash
# Test application using curl...
curl http://host
curl http://host/persistent-data/test.txt
curl http://host/persistent-data/test.html
curl http://host/persistent-data/<filename.txt>

# ...or you can test application over the Internet!
```
