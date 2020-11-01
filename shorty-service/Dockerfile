FROM node:latest
EXPOSE 3005

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm install -g sequelize-cli
RUN npm install

COPY . /home/app

ENTRYPOINT ["sh", "/home/app/docker-entrypoint.sh"]

CMD /home/app/docker-entrypoint.sh