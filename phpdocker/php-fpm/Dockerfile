FROM phpdockerio/php:8.3-fpm
WORKDIR "/backend"

RUN apt-get update \
    && apt-get -y --no-install-recommends install \
        git \ 
        php8.3-bcmath \ 
        php8.3-bz2 \ 
        php8.3-ds \ 
        php8.3-mcrypt \ 
        php8.3-memcache \ 
        php8.3-memcached \ 
        php8.3-mysql \ 
        php8.3-oauth \ 
        php8.3-pgsql \ 
        php8.3-yaml \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
