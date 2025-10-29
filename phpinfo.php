<?php
    phpinfo();
?>
#Imagen base
FROM alpine

MANTINER clemente <jclementeuroz@gmail.com>

#Directorio de trabajo. Recordamos, que si no existe, se crea
RUN apk update && apd add apache2 php php -apache2 openrc tar

ADD ./start.sh/start.sh

ADD
https://gist.githubusercontent.com/SyntaxC4/5648247/raw/94277156638f9c309f2e36e19bff378ba7364907/info.php

RUN adduser -u 82 -D -S -G www-data www-data
RUN chown -R www-data:www-data /var/www/ && chmod -R 775 /var/www/ && chmod 755/start.sh 
CMD /start.sh

