FROM nginx:latest

COPY . /lorem-ipsum-nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]