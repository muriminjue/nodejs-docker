FROM node:16

WORKDIR /apps/demoapp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD [ "node", "index.js" ]