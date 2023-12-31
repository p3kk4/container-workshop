# Container Workshop Excercises

This excercise template is meant to used during **Container Workshop** by [pekkakorpi-tassi.fi](https://pekkakorpi-tassi.fi)or by using it for self-paced learning. The template is available for download from [container-workshop](https://github.com/p3kk4/container-workshop)repository available on GitHub.

## Learn Docker CLI Commands

During the workshop or self-paced learning you can use generative AI and Docker resources to help you:

- [OpenAI ChatGPT](https://chat.openai.com/)
- [GitHub Copilot](https://github.com/features/copilot)
- [Google Bard](https://bard.google.com)
- [xAI Grok](https://grok.x.ai/)
- [Docker reference documentation](https://docs.docker.com/reference)
- [Docker CLI Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

## Workshop VM Connection
```bash
# Use Putty or MacOS terminal to connect to VM, use password given to you by the trainer
# HOX: Copy-paste to Putty windows should work in Windows by using right mouse click as "Paste"
ssh studentadmin@ipaddress

# Go to workshop content folder on VM
cd /students
ls -la
```

## Basic Docker Commands

```bash
# Test that docker is available

# Test docker help for a given command

# Docker system commands

# List Docker Images

# List Docker Containers

```

## Container Image from Docker Hub

You can download any available container images from public or private repositories and immediately run in on your computer's Docker without any configurations!

 Examples of common Docker Image repositories are:

- [Docker Hub](https://hub.docker.com/)
- [Amazon Elastic Container Repository](https://aws.amazon.com/ecr/)
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry)
- [JFrog Artifactory](https://jfrog.com/help/r/jfrog-artifactory-documentation/docker-registry)

That is the power of Docker containers: **You ship it and just run it anywhere!**

**Sample Use-Case:** You can use containers as your development environment in [Visual Studio Code](https://code.visualstudio.com/docs/devcontainers/containers).

```bash
# Search Docker Hub for images
ubuntu
node
nginx

# Download image from repository to local Docker Always use tag as you specicy which image to get!)
ubuntu
```

### Working with Container

```bash
# Create Container (does it stay running?)

# Create Container in interactive mode with sh/bash

# Start and stop container so that it stays running (detached + interactive)

# Create more containers...

# Connect to a running Container's CLI
bash
sh

# Some example CLI commands to run on running Container
whoami
printenv
ps aux

# Navigating file system with CLI commands on running Container
pwd
ls -la
cd folder
cd ..
touch example.txt
pico example.txt

# Exit the container instance
exit
```

## lorem-ipsum-node

**lorem-ipsum-node** teaches how to run [Node.js](https://nodejs.org/en)application to deliver dynamic website/web service by using Docker.

### Naming Convention

```bash
# Decide name that you will consistently use with for IMAGE
image: 

# Always include tag latest AND incrementing version to your IMAGE name
:latest
:0.0.1

# Decide name that you will consistently use with for CONTAINER
container: 

# Decide name that you will consistently use with for SERVICE
service: 
```

### Build and Manage Docker Image

You are working with local Docker Image repository of Docker! For real work scenarios you will be using [Docker Hub](https://hub.docker.com)!

```bash
# List Docker Images

# Build Docker Image
# HOX: When Docker build Docker Image it will download required image layers!
# HOX: Note that as you build image like this, you will have to refer to it by IMAGE ID, which is not convenient...
cd lorem-impsum-node

# Build Docker Image with latest and version tags

# HOX: We would connect Docker to Image Repository by doing login...
docker login --username=exampleusername --email=examplemail@company.com

# HOX: After building docker image we would PUSH it to Docker Repository...
docker image push exampleusername/lorem-ipsum-node:0.0.1
docker image push exampleusername/lorem-ipsum-node:latest

# HOX: ...so that pertinent audiences can PULL Image from Docker Repository!
docker pull exampleusername/lorem-ipsum-node:latest

# Delete Docker Image


# Cleanup Docker Data

```

### Create, Stop, Start and Delete Docker Containers

You are working with standalone Docker containers and you are managing each container separately.

```bash
# List Docker Containers

# Create Container in attached mode
# HOX: Note that as you test container, you can see logs in your terminal...
# HOX: Exiting attached container stops it, if you can manage it!

http://host
http://host/lorem-ipsum

# Create Container in detached mode

# + add TCP port mapping

# + add passing of environmental variables

# + add exposing host OS folder within Container

# Connect to a running Container's CLI

# View Container Logs

# Stop Container

# Start Container

```

### Activate or Deactivate Swarm More for Container Orchestration

By default Docker is running in standalone Containers mode!

```bash
# Switch to Docker Swarm Mode for running Container services

# Leave Docker Swarm Mode for running standalone Containers

```

### Create, Scale Out, Scale In and Remove Docker Container Service

You are working with Docker Swarm container services and you are defining features of Container Service and Docker Swarm Orchestrator will manage Containers for you. Running Containers that constitute the Service are called Replicas.

```bash

# List Docker Services

# Create Service

# + add TCP port mapping

# + add passing of environmental variables

# + add exposing host OS folder within Containers

# Inspect service

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

**lorem-ipsum-nginx** teaches how to run [NGINX](https://www.nginx.com)web server to deliver static website by using Docker.

```bash
# Decide name that you will consistently use with for IMAGE
image: 

# Always include tag latest AND incrementing version to your IMAGE name
:latest
:0.0.1

# Decide name that you will consistently use with for CONTAINER
container: 

# Decide name that you will consistently use with for SERVICE
service: 
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
