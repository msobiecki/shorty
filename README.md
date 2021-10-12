# Shorty
Shorty, URL shortener

![Shorty](https://i.imgur.com/znXsnJN.png)

## Development

### Frontend
- client - main react application builded by create-react-app

  Environment | Address
  ------------ | -------------
  development | http://localhost:3000
  test | 
  beta | 
  production | 

  Environment params | Type
  ------------ | -------------
  REACT_APP_PROJECT_NAME | string
  REACT_APP_STAGE | string
  REACT_APP_LANGUAGE | string
  REACT_APP_THEME | string
  REACT_APP_API | url
  REACT_APP_COPYRIGHT_COMPANY | string
  REACT_APP_COPYRIGHT_DATE | string

### Backend
- shorty-service - microservice build by express

  Environment | Address
  ------------ | -------------
  development | http://localhost:8000
  test | 
  beta | 
  production | 

  Environment params | Type
  ------------ | -------------
  SHORTY_SECRET | string
  SHORTY_DOMAIN | string
  SHORTY_HOSTNAME | url/ip
  SHORTY_PORT | number
  SHORTY_SSL | boolean
  SHORTY_DATABASE_URL | database url

###  Docker

- Compose params

  Environment params | Type
  ------------ | -------------
  NODE_ENV | string
  STAGE | string
  CLIENT_PORT | number
  REACT_APP_PROJECT_NAME | string
  REACT_APP_LANGUAGE | string
  REACT_APP_THEME | string
  REACT_APP_API | url
  REACT_APP_COPYRIGHT_COMPANY | string
  REACT_APP_COPYRIGHT_DATE | string
  POSTGRES_PORT | number
  POSTGRES_USER | string
  POSTGRES_PASSWORD | string
  SHORTY_SECRET | string
  SHORTY_DOMAIN | string
  SHORTY_HOSTNAME | url/ip
  SHORTY_PORT | number
  SHORTY_SSL | boolean
  SHORTY_DATABASE_URL | database url

- Project image 
  - create: ```docker-compose -f 'docker-compose.yml' up```
- Shorty-service database
  - create: ```docker exec shorty_shorty-service_1 npx sequelize-cli db:create```
  - migrate: ```docker exec shorty_shorty-service_1 npx sequelize-cli db:migrate```
