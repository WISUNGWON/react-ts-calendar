FROM nginx:1.14.2-alpine

COPY ./build /var/www/victoriasnoop.com
COPY ./nginx.conf /etc/nginx/conf.d/victoriasnoop.com.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]