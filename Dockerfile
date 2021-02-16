FROM node:14-alpine

WORKDIR /application

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "/application/src/index.js"]

