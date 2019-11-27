module.exports = {
  Mutation: {
    signup: (_, { data }) => ({
      id: "user_id_string",
      ...data
    })
  }
}