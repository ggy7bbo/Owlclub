module.exports = {
  servers: {
    one: {
      host: '52.78.19.20',
      username: 'ubuntu',
      pem: '/Users/Seoboseok/deploy.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'owlclub',
    path: '/Users/Seoboseok/GitHub/Owlclub/intermediate',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://ec2-52-78-19-20.ap-northeast-2.compute.amazonaws.com/',
      // MONGO_URL: 'mongodb://ggybbo:gudwp4920@jello.modulusmongo.net:27017/Deda5gaq'
      MONGO_URL: 'mongodb://localhost:27017/owlclub'
    },

    dockerImage: 'kadirahq/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};