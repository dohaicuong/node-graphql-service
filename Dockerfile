FROM node:12.13-alpine

WORKDIR /etc/app
COPY ./package.json .
RUN yarn

COPY . .

ENTRYPOINT yarn start