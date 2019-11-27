const { me } = require('../query.resolvers').Query

describe('test me query', () => {
  it('should return user', async () => {
    const res = await me()

    expect(res).toHaveProperty('id')
    expect(res).toHaveProperty('email')
    expect(res).toHaveProperty('name')
  })
})