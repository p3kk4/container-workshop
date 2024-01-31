# Container Workshop

<div class="row">
  <div class="column">
    <img src="https://pekkakorpi-tassi.fi/img/logo_v1.8.png"  width=400>
  </div>
</div>

Welcome to the **Container Workshop** by [pekkakorpi-tassi.fi](https://pekkakorpi-tassi.fi)!

## Overview

The [container-workshop](https://github.com/p3kk4/container-workshop) repository is available on GitHub and serves as a material package that includes all the necessary resources required to learn about Docker containers via practical examples.

The material package can be used for self-paced learning, although it is primarily meant to be complemented by instructor-led workshops. During the workshops learners can engage in hands-on learning activities and building their own documentation while exploring Docker containers.

The learning environment for the workshops is meant to be learner-specific preconfigured Ubuntu + Docker setup deployed on AWS EC2 instance. Learners gain access to the learning environments via SSH, enabling them to deploy and test applications over the Internet.

The major contents of the container-workshop repository are:

- [lorem-ipsum-node](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-node) teaches how to run [Node.js](https://nodejs.org/en) application to deliver dynamic website/web service by using Docker.
- [lorem-ipsum-nginx](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-nginx) teaches how to run [NGINX](https://www.nginx.com) web server to deliver static website by using Docker.
- ***lorem-ipsum-python is possible future content is currently not available.***
- ***lorem-ipsum-golang is possible future content is currently not available.***

## Learning Environment Access

You can take SSH (port 22) connection to the learning environment AWS EC2 instances by using provided IP address, username and password. The learning environment AWS EC2 instances also support taking HTTP (port 80) requests from the Internet. The learning environment instances are available during the workshop and will be immediately destroyed after the workshop. You do not need to send or retrieve any data from the learning environment as all the materials are available publicly on GitHub.

You can simply use standard terminal of your Linux OS, Mac OS or Windows OS (if you have OpenSSH Client Feature installed) to connect to the learning environment AWS EC2 instances:

```bash
ssh exampleuser@123.10.10.29
```

If you have Windows and you do not have OpenSSH Client Feature installed one possible SSH client application that can be used with Windows could be [Putty](https://www.putty.org/).

### Excercises

Download [container_workshop_excercises.md](https://github.com/p3kk4/container-workshop/blob/master/container_workshop_excercises.md) file for yourself and use it to document any commands, notes and comments that you use to learn about Docker Containers during the workshop or self-paced learning.

## Key Concepts

In the context of this material package it is important to learn about concepts **Container** and **Orchestration**.

### Container

<div class="row">
  <div class="column">
    <img src="./docker-logo.png" width=400 style="padding-top:40px;padding-bottom:40px;">
  </div>
</div>

Docker defines [What is a container?](https://docs.docker.com/guides/walkthroughs/what-is-a-container) as follows:

```text
A container is an isolated environment for your code. This means that a container has no
knowledge of your operating system, or your files. It runs on the environment provided
to you by Docker Desktop. Containers have everything that your code needs in order to run,
down to a base operating system. You can use Docker Desktop to manage and explore your
containers.
```

**Docker** application provides a feature that allows an application to be built as a **Docker Image** based on **Dockerfile** that defines what will be included in the Docker Image. Docker Image contains base image, application and all it's dependencies and other resources that allow application to be run without modifications in any environment that offers Docker Container executing capabilities (Docker, Docker Swarm, Kubernetes, AWS ECS, AWS EKS, AWS Fargate, etc.).

Docker Images can be used to launch **Docker Containers** which can be executed by Docker application as a **Standalone Docker Containers** or as part of a **Docker Swarm Orchestrated Container Service**. Docker Containers are ephemereal (Containers lose all data as they are destroyed) and require persistent data to be stored outside Docker Containers. Data persistence is achieved by using other services for data storage through APIs or by exposing persitent data storages directly to Docker Containers.

**Links:**

- [Docker](https://www.docker.com)
- [Docker Hub](https://hub.docker.com)
- [Docker reference documentation](https://docs.docker.com/reference)
- [Docker CLI Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
- [Install Docker on Linux](https://docs.docker.com/desktop/install/linux-install)
- [Docker install on Mac](https://docs.docker.com/desktop/install/mac-install)
- [Docker install on Windows](https://docs.docker.com/desktop/install/windows-install)

### Orchestration

We often hear word "Orchestration" talked about related to Containers or Serverless applications, but it is frequently not really elaborated upon in any depth for example in public Cloud Vendor (looking at you Microsoft Azure and Amazon Web Services) materials. "Orchestration" is just something pretty great and magical and it happens in AWS ECS, AWS EKS, AWS Fargate and AWS Lambda and please look away and don't ask questions. **Sigh!**

I try to explain Orchestration to learners as a general term that encompasses many features that are often considered to be "Cloud Features". It is interesting notion that Orchestration does not only relate to Containers, but also to Virtual Machines and Serverless solutions. However, suffice it here that we address Orchestration only as it relates to Containers. The major features or Orchestration could be said to include (not a comprehensive list) using Docker Swarm Container Orchestrator as an example:

- Service Definition and Launch
  - You use Docker CLI to define (Docker Swarm) Services by specifying Docker Image (and other parameters) used to launch **Replicas** (Orchestrated Containers of that Services).
- Service Discovery
  - Service discovery is a feature somewhat close to concept to Load Balancing, but it means the ability to automatically map the service name to it's Virtual IP Address, which can be used to route requests to running Containers' IP Addresses (that are dynamic).
- Workflow Coordination
  - Workflow Coordination means the ability of Orchestrator to call Container Services in a sequence to effect a chain of operations. Workflow Coordination supports conditional selection of next Service to be called, retries, error handling etc.. Workflow coordination is **not a feature of Docker Swarm**.
- Horizontal Scaling
  - Docker Swarm is able to scale the amount of Replicas for a given Service, but it **does not provide Elasticity** (automatic scaling) **by default**.
- Load Balancing
  - Docker Swarm Manager exposes the services you want to make available by specific port and load balanced request to Replicas running on some Docker Swarm Node of Docker Swarm Cluster.
- Isolation
  - Docker technology provides Containers isolation as a fundamental feature. Containers do not affect other Containers or Operating System even if they fail.
- High Availability
  - Docker Swarm run Services have Redundant resources to the amount of active Replicas so users do not notice any issues in service even if there is failure with one VM.
- Health Checks
  - Docker Swarm is able to detect containers in failed state.
- Auto Recovery
  - Docker Swarm is able to replace Containers healthy Containers automatically.
   is able to detect containers in failed state.
- Rolling Updates and Rollbacks
  - As long as Docker Images are properly tagged going up and down versions by Docker Swarm run Service is a trivial matter.

## Disclaimer

All the information in this repository is published in good faith and for general information purpose only. I do not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find in this repository, is strictly at your own risk. I will not be liable for any losses and/or damages in connection with the use of materials in this repository.

## License

The materials of this workshop - specifically the associated entry on pekkakorpi-tassi.fi website and materials made available through GitHub repository github.com/p3kk4/container-workshop - are made available under the terms of the Creative Commons Attribution Non Commercial No Derivatives 4.0 International License.

- [https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)
