# connected-car-node-api

ExpressJS API built on top of the [connected-car-node-sdk](https://github.com/ianjwhite99/connected-car-node-sdk). This API is designed to act as a middleman between the client and FordPass API. This application can be deployed using [serverless](https://serverless.com/) or [docker](https://www.docker.com/). The latest docker image is available on docker hub in the [connected-car-docker-api](https://hub.docker.com/r/ianjwhite99/connected-car-docker-api/) repository.

## Getting Started

Setting up the local environment is as simple as cloning this repository and running the following commands:

```bash
npm install
npm run dev:start
```

This will start a local development server on port 3000.

## Docker Build

If you want to build a custom docker image for a special use case, you can use do the following:

Building the docker image:

```bash
docker build -t connected-car-docker-api .
```

Running the docker image:

```bash
docker run -p 8080:3000 -d connected-car-docker-api
```

## Disclaimer

THIS CODEBASE IS NOT ENDORSED, AFFILIATED, OR ASSOCIATED WITH FORD, FOMOCO OR THE FORD MOTOR COMPANY.
