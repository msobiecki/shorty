# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:16

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app


ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG STAGE
ENV REACT_APP_STAGE $STAGE

ARG REACT_APP_PROJECT_NAME
ENV REACT_APP_PROJECT_NAME $REACT_APP_PROJECT_NAME

ARG REACT_APP_LANGUAGE
ENV REACT_APP_LANGUAGE $REACT_APP_LANGUAGE

ARG REACT_APP_THEME
ENV REACT_APP_THEME $REACT_APP_THEME

ARG REACT_APP_API
ENV REACT_APP_API $REACT_APP_API

ARG REACT_APP_COPYRIGHT_COMPANY
ENV REACT_APP_COPYRIGHT_COMPANY $REACT_APP_COPYRIGHT_COMPANY

ARG REACT_APP_COPYRIGHT_DATE
ENV REACT_APP_COPYRIGHT_DATE $REACT_APP_COPYRIGHT_DATE

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start"]