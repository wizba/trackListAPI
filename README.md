
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Setup docker and run redis

```bash
# Mac os 
--- https://docs.docker.com/desktop/install/mac-install/
# Windows
---https://docs.docker.com/desktop/install/windows-install/


after setup is complete
  
  run  (docker-compose up) in the project root

  then (npm run start:dev) to start the application

```
## Test

```bash
# unit tests
$ npm run test

```
## Using the application (please use postman/ thunder client for all these routes to get authoriztion)
- authenticate to get tokken [click to get tokken](http://localhost:3000/api#/default/AppController_login)

- all routes are available [click to see routes](http://localhost:3000/api#/) 


## Tech stack
- Nestjs
- TypeScript
- Docker
- Redis
- MongoDB