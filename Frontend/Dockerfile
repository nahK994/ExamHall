# FROM node:18 as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN ng build


# FROM nginx:1.17.1-alpine
# COPY --from=node /dist/frontend /usr/share/nginx/html


FROM nginx:1.17.1-alpine
COPY /dist/frontend /usr/share/nginx/html