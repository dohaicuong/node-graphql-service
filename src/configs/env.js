require('dotenv').config('../.env')

const {
  GRAPHQL_PORT,
  JWT_SECRET,
  ENGINE_API_KEY,
  NODE_ENV
} = process.env


module.exports = {
  GRAPHQL_PORT,
  JWT_SECRET,
  ENGINE_API_KEY,
  NODE_ENV
}
