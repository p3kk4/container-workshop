FROM node:16

RUN mkdir -p /app
RUN mkdir -p /app/src

COPY package.json /app
COPY package-lock.json /app
COPY ./src/* /app

WORKDIR /app
RUN npm install

EXPOSE 3001

CMD npm start