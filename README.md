# Northern Stable

Solution for technical test for Northern Stable, you can view details of the test [here](https://github.com/Northern-Stable/Front-End-Tech-Test).

## Running Locally

Simply run the following commands:

```bash
git clone https://github.com/shan5742/northern-stable.git
yarn
yarn start
```

You should now be able to see the application at <http://localhost:3000/>

## Running with Docker

### Prerequisites

You must have Docker and Docker compose installed on your machine, if you haven't but would like to then see the [Docker Docs](https://docs.docker.com/get-docker/). For Docker Compose you can follow [these instructions](https://docs.docker.com/compose/install/).

You now have a couple of options, there is a Docker environment setup for running the application and running the tests. Instructions for running both are below:

### Application

To build the app:

```bash
docker-compose build dev
```

To run the application:

```bash
docker-compose up dev
```

You should now be able to view the application at <http://localhost:4680/>

### Test Suite

Build phase

```bash
docker-compose build test
```

To run the tests:

```bash
docker-compose run --rm test
```

The output from the tests will now display in the terminal.
