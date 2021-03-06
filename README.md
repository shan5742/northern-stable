# Northern Stable

## Contents

1. [Local setup](#running-locally)
2. [Docker](#running-with-docker)
3. [Development](#working-on-this-application)

Solution for technical test for Northern Stable, you can view details of the test [here](https://github.com/Northern-Stable/Front-End-Tech-Test). This application is deployed [here](https://northern-stable.netlify.app/). I opted to build this application with React and more specifically the Create React App cli for getting up and running quickly, tests are written in jest, which are configured and work out the box with React. For deployment I opted for Netlify as I am familiar and it works seamlessly with Github, whenever a branch is pushed to it triggers a build and updates the site.

This particular application has three branches triggering Netlify builds - `main`(production), `staging` and `dev`.

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

## Working On This Application

### Dev

There are a number of environments setup to enable a solid workflow for working on this app. Any experimental work on new features can be done on branches and merged into the `dev` branch, when this is pushed to it triggers a build and can be tested in a production state [here](https://northern-stable-dev.netlify.app/).

### Staging

Similarly there is a `staging` branch setup, which when pushed to triggers a build and can be seen in a production state [here](https://northern-stable-staging.netlify.app/). The next step would be the production site, which is the live URL [here](https://northern-stable.netlify.app/).

### Production

The `main` branch in this repository is essentially the production branch, which again triggers a build once pushed to. Anything pushed into the `main` branch should be well tested and reviewed first, so this branch is protected, submit a pull request and after a successful review I will merge into production.
