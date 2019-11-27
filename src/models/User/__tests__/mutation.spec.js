const { signup } = require('../mutation.resolvers').Mutation

describe('test me query', () => {
  it('should return user', async () => {
    const mockData = {
      email: 'email@email.com',
      password: 'password',
      name: 'user_name'
    }

    const res = await signup(null, { data: mockData })

    expect(res).toHaveProperty('id')
    expect(res.email).toBe(mockData.email)
    expect(res.name).toBe(mockData.name)
  })
})