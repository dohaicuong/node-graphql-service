# graphql nodejs

this repository is designed to be a starting point for building a graphql service with minimal setup

## Features

### Development
 - Using Nodemon to hot reload when code changes
 - Jest as testing framework
 - Graphql Playground
 - Auto load graphql typedefs and resolvers in folder
 - Custom scalar
 - Apollo Engine
 - Circle CI

### Production
 - Dockerfile example
 - docker-compose example

## Commands

| commands                | Description                                 |
| ------------------------|:-------------:                              |
| `yarn dev`              | Launches development server with hot reload |
| `yarn start`            | Launches graphql server                     |
| `yarn test:unit`        | Executes unit tests                         |
| `yarn test:ci`          | Executes integration tests                  |

## Roadmap
 - project generator
 - model, test, custom scalar generator
 - custom directives
 - adding graphql middleware for mutation input validation (gen option)
 - adding graphql middleware for graph resources permission (gen option)
