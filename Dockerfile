FROM node:latest as builder

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run build -- --prod

FROM nginx:alpine

COPY --from=builder /app/dist/Explorer-WEB /usr/share/nginx/html

COPY --from=builder /app/nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]