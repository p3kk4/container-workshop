# Container Workshop

<div class="row">
  <div class="column">
    <img src="https://pekkakorpi-tassi.fi/img/logo_v1.8.png"  width=400>
  </div>
</div>

Welcome to the **Container Workshop** by [pekkakorpi-tassi.fi](https://pekkakorpi-tassi.fi){:target="_blank"}!

## Overview

The [container-workshop](https://github.com/p3kk4/container-workshop){:target="_blank"} repository is available on GitHub and serves as a material package that includes all the necessary resources required to learn about Docker containers via practical examples.

The material package can be used for self-paced learning, although it is primarily meant to be complemented by instructor-led workshops. During the workshops learners can engage in hands-on learning activities and building their own documentation while exploring Docker containers.

The learning environment for the workshops is meant to be learner-specific preconfigured Ubuntu + Docker setup deployed on AWS EC2 instance. Learners gain access to the learning environments via SSH, enabling them to deploy and test applications over the Internet.

The major contents of the container-workshop repository are:

- [lorem-ipsum-node](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-node){:target="_blank"}
 teaches how to run [Node.js](https://nodejs.org/en){:target="_blank"} application to deliver dynamic website/web service by using Docker.
- [lorem-ipsum-nginx](https://github.com/p3kk4/container-workshop/tree/master/lorem-ipsum-nginx){:target="_blank"} teaches how to run [NGINX](https://www.nginx.com){:target="_blank"} web server to deliver static website by using Docker.
- ***lorem-ipsum-python is possible future content is currently not available.***
- ***lorem-ipsum-golang is possible future content is currently not available.***

## Learning Environment Access

You can take SSH (port 22) and HTTP (port 80) connections to the learning environment AWS EX2 instances by using provided IP address, username and password. The learning environment instances are available during the workshop and will be immediately destroyed after the workshop. You do not need to send or retrieve any data from the learning environment as all the materials are available publicly on GitHub.

You can simply use standard terminal of your Linux OS, Mac OS or Windows OS (if you have OpenSSH Client Feature installed) to connect to the learning environment AWS EC2 instances:

```bash
ssh exampleuser@123.10.10.29
```

If you have Windows and you do not have OpenSSH Client Feature installed one possible SSH client application that can be used with Windows could be [Putty](https://www.putty.org/){:target="_blank"}.

## Key Concepts

In the context of this material package it is important to learn about concepts **Container** and **Orchestration**.

### Container

Docker defines [What is a container?](https://docs.docker.com/guides/walkthroughs/what-is-a-container){:target="_blank"} as follows:

```text
A container is an isolated environment for your code. This means that a container has no
knowledge of your operating system, or your files. It runs on the environment provided
to you by Docker Desktop. Containers have everything that your code needs in order to run,
down to a base operating system. You can use Docker Desktop to manage and explore your
containers.
```

**Links:**

- [Docker](https://www.docker.com){:target="_blank"}
- [Docker Hub](https://hub.docker.com){:target="_blank"}
- [Docker reference documentation](https://docs.docker.com/reference){:target="_blank"}
- [Docker CLI Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf){:target="_blank"}
- [Install Docker on Linux](https://docs.docker.com/desktop/install/linux-install){:target="_blank"}
- [Docker install on Mac](https://docs.docker.com/desktop/install/mac-install){:target="_blank"}
- [Docker install on Windows](https://docs.docker.com/desktop/install/windows-install){:target="_blank"}

### Orchestration

Should be considered as a general term, applies little bit differently for VMs, Containers and Serverless...

## Disclaimer

All the information in this repository is published in good faith and for general information purpose only. I do not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find in this repository, is strictly at your own risk. I will not be liable for any losses and/or damages in connection with the use of materials in this repository.

## License

Materials distributed here are made available under the terms of the Creative Commons Attribution Non Commercial No Derivatives 4.0 International License.

- [https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en){:target="_blank"}
