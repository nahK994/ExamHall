FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN ng build


FROM nginx:1.17.1-alpine
COPY --from=node /dist/frontend /usr/share/nginx/html