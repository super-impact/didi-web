module.exports = {
  client: {
    service: {
      name: 'local',
      url: 'http://localhost:8000/graphql'
    },
    includes: [
      __dirname + '/src/**/*.ts',
      __dirname + '/src/**/*.tsx',
    ],
  }
}