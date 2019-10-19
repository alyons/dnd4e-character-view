FROM node:12.10.0 as base

WORKDIR /app

FROM base as dependencies
COPY package*.json ./
RUN npm ci

FROM dependencies as build
WORKDIR /app
COPY ./ /app
RUN npm run build

FROM node:12.1.0-alpine
COPY --from=dependencies /app/package.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
COPY ./server ./

ENTRYPOINT [ "node" ]
CMD [ "index.js" ]
