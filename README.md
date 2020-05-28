# FULL STACK LOGIN USER APP

## - by [Christian Crisologo](https://portfolio.cyianite.now.sh/)

- A fullstack application ready to deploy to CI/CD with docker + database, ReactJS UI client + ExpressJS server + unit test .

---

## Prerequisite

- Install and setup docker https://www.docker.com/products/docker-desktop
- Install NPM https://nodejs.org/en/download/

## Setup and run Docker

- Create default docker machine with
  `$ docker-machine create default`
- Run the default docker-machine
  `$ docker-machine start default`
- Fix for old osx to set the docker-machine default ip,
  `'$ eval "$(docker-machine env default)'`
- Once the docker-machine default running, run the docker-compose and deploy
  `$ docker-compose up -d`

## Running the App in local thru Docker

- Bind the ip to local client using

```sh
  `$ curl $(docker-machine ip default):3000`
```

- Do the same for the server

```sh
  `$ curl $(docker-machine ip default):4000`
```

- Check the ip being used and use it as your localhost

```sh
  `$ docker-machine ip`
```

- To run the MySQL in local, you can use your IDE SQL using the docker yml config. In case theres a local connection issue, try to use the docker msql container sql shell

```sh
  `$ docker exec -it mysql1 mysql -u root -p`
```

## Running in dev local

- To test dev frontend in local, go to `client` directory then install and run the app

```sh
  `$ npm i && npm start`
```

- To test dev backend in local, go to `server` directory then install and run the app. `(NOTE! If the DB is not accessable in your local then its better to run it in docker)`

```sh
  `$ npm i && npm start`
```
