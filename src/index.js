const { ApolloServer } = require('apollo-server')

const schema = require('./models')
const context = require('./context')

const cors = require('./configs/cors')
const onHealthCheck = require('./configs/healthCheck')

const { GRAPHQL_PORT, ENGINE_API_KEY, NODE_ENV } = require('./configs/env')
const handleSignal = require('./configs/handleSignal')

const server = new ApolloServer({
  schema,
  context,
  cors,
  onHealthCheck,
  engine: {
    apiKey: ENGINE_API_KEY,
    // schemaTag: NODE_ENV
  }
})

server
  .listen(GRAPHQL_PORT)
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log(`🚀  Health check at ${url}.well-known/apollo/server-health`)
  })
  .then(handleSignal)