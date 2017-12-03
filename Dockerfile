FROM macbootglass/myownportfolio-env
MAINTAINER thibault.theologien@insa-rouen.fr

COPY package.json /root
RUN npm install

COPY app /root/app
COPY etc/scripts /root/etc/scripts
COPY .babelrc /root
COPY gulpfile.js /root
COPY webpack.config.js /root

VOLUME /root/dist
VOLUME /root/app/json_config

CMD npm run build
