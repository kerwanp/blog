ARG NODE_VERSION

FROM node:21-alpine

WORKDIR /app

COPY ./ /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
