# Shorty
Shorty, URL shortener

![Shorty](https://i.imgur.com/znXsnJN.png)

## Development

### Frontend
- client - main react application builded by create-react-app

  Enviroment | Address
  ------------ | -------------
  development | http://localhost:3000
  test | https://test-shorty.codeshaker.pl
  staging | https://staging-shorty.codeshaker.pl
  production | https://shorty.codeshaker.pl

  Enviroment params | Type
  ------------ | -------------
  REACT_APP_PROJECT_NAME | string
  REACT_APP_COPYRIGHT_COMPANY | string
  REACT_APP_COPYRIGHT_DATE | string
  REACT_APP_API | url

### Backend
- short-service - microservice build by express

  Enviroment | Address
  ------------ | -------------
  development | http://localhost:8002
  test | https://test-shorty-api.codeshaker.pl
  staging | https://staging-shorty-api.codeshaker.pl
  production | https://shorty-api.codeshaker.pl

  Enviroment params | Type
  ------------ | -------------
  SHORTY_SECRET | string
  SHORTY_DOMAIN | string
  SHORTY_HOSTNAME | url/ip
  SHORTY_PORT | number
  SHORTY_SSL | boolean
  SHORTY_DATABASE_URL | database url

###  Docker
- Project image 
  - create: ```docker-compose -f 'docker-compose.yml' up```
- Shorty-service database
  - create: ```docker exec shorty_shorty-service_1 npx sequelize-cli db:create```
  - migrate: ```docker exec shorty_shorty-service_1 npx sequelize-cli db:migrate```