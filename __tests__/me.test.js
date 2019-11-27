const { ApolloServer, gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')

const schema = require('../src/models')

const server = new ApolloServer({ schema })
const { query } = createTestClient(server)

const ME_QUERY = gql`
  query me {
    me {
      id
      email
      name
    }
  }
`

it('should pass', async () => {
  const res = await query({ query: ME_QUERY })

  expect(res.data.me.id).toBe('user_id_string')
})