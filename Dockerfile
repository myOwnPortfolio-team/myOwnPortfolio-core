FROM macbootglass/myownportfolio-env
MAINTAINER thibault.theologien@insa-rouen.fr

COPY app /root/app
COPY etc/scripts /root/etc/scripts
COPY .babelrc /root
COPY gulpfile.js /root
COPY package.json /root
COPY webpack.config.js /root
RUN npm install

VOLUME /root/dist
VOLUME /root/app/json_config

CMD mkdir dist/style && npm run build:prod
