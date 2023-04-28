FROM node:14 as build

WORKDIR /app
COPY . .
RUN npm install
# RUN node_modules/.bin/ng build
# RUN npm run build
RUN node_modules/.bin/ng build --configuration=development

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/Frontend /usr/share/nginx/html
EXPOSE 80
