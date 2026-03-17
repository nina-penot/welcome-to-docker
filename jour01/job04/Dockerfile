#Image

# FROM php:8.2-cli
# COPY . /job04
# WORKDIR /job04
# CMD [ "php", "./index.php" ]

FROM php:7.2-apache

LABEL description="My first docker image."

COPY index.php /var/www/html/
WORKDIR var/www/html

#Port
EXPOSE 8080