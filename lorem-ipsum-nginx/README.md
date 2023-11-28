# lorem-ipsum-nginx

<div class="row">
  <div class="column">
    <img src="https://pekkakorpi-tassi.fi/img/logo_v1.8.png"  width=400>
  </div>
</div>

**lorem-ipsum-nginx** is an example about usage of [NGINX](https://www.nginx.com)web server to serve static web page files. Note that NGINX has other major features such as acting as a HTTP request reverse proxy, which are not explored with this example. NGINX **Web Server** listens to a specific TCP port for HTTP Requests and sends back corresponding HTTP Responses.

This NGINX example can be build as a **Docker Image** based on **Dockerfile** that defines:

  - The **Base Image** that acts as base layer were the required resources are added
  - the CLI commands required to build the application
  - the applications executable resources
    - what files constituting the application are included in Docker Image
    - what are are the application's dependencies
  - which TCP port the application listens to
  - the CLI commands to start the application

The resulting Docker image can be used to launch **Docker Containers** which can be executed in a **Docker** server application as a **Standalone Docker Containers** or as part of a **Docker Swarm Orchestrated Container Service**.

Do note that the lorem-ipsum-nginx example is intended not as an exemplar for the best practices in configuring NGINX web server or Docker container implementation, but as a practical resource for anyone looking to learn the basics about how to work with containers.

### Contents

```text
# Documentation for everything related to lorem-ipsum-nginx.
./README.md

# Web server configuration file.
./nginx.conf

# Test content in Markdown format and resulting HTML file used for testing.
./html/lorem-ipsum-nginx.html

# Describes how Docker builds the Docker Image.
./Dockerfile
```
