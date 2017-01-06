module.exports = {
  servers: {
    one: {
      host: '52.79.105.59',
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
      ROOT_URL: 'http://ec2-52-79-105-59.ap-northeast-2.compute.amazonaws.com/',
      // MONGO_URL: 'mongodb://ggybbo:gudwp4920@jello.modulusmongo.net:27017/Deda5gaq'
      MONGO_URL: 'mongodb://localhost:27017/owlclub',
      // MAIL_URL: 'smtp://ggy7bbo%40gmail.com:gudwp2084@smtp.gmail.com:587',
      // MAIL_URL: 'smtp://postmaster%40sandboxdc64b29f64044dfbb7ce15c22ea4291d.mailgun.org:ca54aa55d6283a26da415c2167539ece@smtp.mailgun.org:587'
      // "process.env.MAIL_URL"="smtp://ggy7bbo%40gmail.com:gudwp2084@smtp.gmail.com:465"
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