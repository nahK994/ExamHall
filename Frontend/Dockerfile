FROM node:14 as node

WORKDIR /app
COPY . .
RUN npm install
RUN node_modules/.bin/ng build


FROM nginx:1.17.1-alpine
COPY --from=node /dist/Frontend /usr/share/nginx/html