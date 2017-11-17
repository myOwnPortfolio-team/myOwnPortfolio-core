FROM ruby:jessie
MAINTAINER thibault.theologien@insa-rouen.fr
WORKDIR /root

RUN apt-get update
RUN apt-get install nodejs npm -y
RUN npm install -g n
RUN npm install npm@latest -g
RUN n stable
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN gem install sass
RUN gem install sass-json-vars
RUN npm install --global gulp-cli
RUN rm -rf /var/lib/apt/lists/*

COPY app /root/app
COPY etc/scripts /root/etc/scripts
COPY .babelrc /root
COPY gulpfile.js /root
COPY package.json /root
COPY webpack.config.js /root
RUN npm install

VOLUME /root/dist
VOLUME /root/app/config

CMD mkdir dist/style && npm run build:prod
