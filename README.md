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

- [lorem-ipsum-node](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-node) teaches how to run [Node.js](https://nodejs.org/en)application to deliver dynamic website/web service by using Docker.
- [lorem-ipsum-nginx](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-nginx) teaches how to run [NGINX](https://www.nginx.com)web server to deliver static website by using Docker.
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

Docker defines [What is a container?](https://docs.docker.com/guides/walkthroughs/what-is-a-container) as follows:

```text
A container is an isolated environment for your code. This means that a container has no
knowledge of your operating system, or your files. It runs on the environment provided
to you by Docker Desktop. Containers have everything that your code needs in order to run,
down to a base operating system. You can use Docker Desktop to manage and explore your
containers.
```

**Links:**

- [Docker](https://www.docker.com)
- [Docker Hub](https://hub.docker.com)
- [Docker reference documentation](https://docs.docker.com/reference)
- [Docker CLI Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
- [Install Docker on Linux](https://docs.docker.com/desktop/install/linux-install)
- [Docker install on Mac](https://docs.docker.com/desktop/install/mac-install)
- [Docker install on Windows](https://docs.docker.com/desktop/install/windows-install)

### Orchestration

Should be considered as a general term, applies little bit differently for VMs, Containers and Serverless...

## Disclaimer

All the information in this repository is published in good faith and for general information purpose only. I do not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find in this repository, is strictly at your own risk. I will not be liable for any losses and/or damages in connection with the use of materials in this repository.

## License

Materials distributed here are made available under the terms of the Creative Commons Attribution Non Commercial No Derivatives 4.0 International License.

- [https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)
