FROM ruby:latest
MAINTAINER thibault.theologien@insa-rouen.fr
VOLUME /root/project
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
COPY ./compile.sh /root/compile.sh
COPY ./start_server.sh /root/start_server.sh
CMD echo "Choose the script from docker-compose" && ls -l
