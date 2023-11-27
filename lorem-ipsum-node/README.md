# lorem-ipsum-node

<div class="row">
  <div class="column">
    <img src="https://pekkakorpi-tassi.fi/img/logo_v1.8.png"  width=400>
  </div>
</div>

**lorem-ipsum-node** is an example **Application** implemented using JavaScript and executed within the Node.js runtime. The application uses Node.js core module ***http*** to create a custom **Web Server** that listens to a specific TCP port for HTTP Requests and sends back corresponding HTTP Responses. The web server manages a set of **Path/Route** implementations that define functionalities constituting the **Web Service** provided by the application.

The application can be build as a **Docker Image** based on **Dockerfile** that defines:

  - The **Base Image** that acts as base layer were the required resources are added
  - the CLI commands required to build the application
  - the applications executable resources
    - what files constituting the application are included in Docker Image
    - what are are the application's dependencies
  - which TCP port the application listens to
  - the CLI commands to start the application

The resulting Docker image can be used to launch **Docker Containers** which can be executed in a **Docker** server application as a **Standalone Docker Containers** or as part of a **Docker Swarm Orchestrated Container Service**.

Do note that the lorem-ipsum-node application is intended not as an exemplar for the best practices in JavaScript application developement or Docker container implementation, but as a practical resource for anyone looking to learn the basics about how to work with containers.

### Contents

```text
# Documentation for everything related to lorem-ipsum-node.
./README.md

# Node.js package manager files that are used to manage the application's dependencies.
./package.json
./package-lock.json

# Application implementation.
./src/lorem-ipsum-node.js

# Test content in Markdown format and resulting HTML file used for testing.
./src/lorem-ipsum-node.md
./src/lorem-ipsum-node.html

# Describes how Docker builds the Docker Image.
./Dockerfile
```

### Excercises

Download [container_workshop_excercises.md](https://github.com/p3kk4/container-workshop/blob/master/container_workshop_excercises.md){:target="_blank"} file for yourself and use it to document any commands, notes and comments that you use to learn about Docker Containers during the workshop or
