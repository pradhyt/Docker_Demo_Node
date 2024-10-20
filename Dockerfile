FROM node:latest

WORKDIR /usr/app

COPY . .

RUN npm i

EXPOSE 5001

CMD node server.js