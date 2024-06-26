ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY ./ /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
