# Northern Stable

Solution for technical test for Northern Stable, you can view details of the test [here](https://github.com/Northern-Stable/Front-End-Tech-Test).

## Prerequisites

You must have Docker and Docker compose installed on your machine, if you haven't but would like to then see the [Docker Docs](https://docs.docker.com/get-docker/). For Docker Compose you can follow [these instructions](https://docs.docker.com/compose/install/).

## Running with Docker

Clone the `docker` branch:

```
git clone --single-branch --branch docker https://github.com/shan5742/northern-stable.git
```

To build the app:

```
docker-compose build dev
```

To run the application:

```
docker-compose up dev
```

You should now be able to view the application at <http://localhost:4680/>
