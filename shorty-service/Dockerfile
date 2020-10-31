FROM node:latest
EXPOSE 3005 9230

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm install

COPY . /home/app

RUN echo "$NODE_ENV"

ENTRYPOINT ["sh", "/home/app/docker-entrypoint.sh"]

CMD /home/app/docker-entrypoint.sh