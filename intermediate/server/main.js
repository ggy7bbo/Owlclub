import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // setTimeout(function(){
//   //   console.log("Server is running at 3000");
//   // }, 3000);
// });

if (Meteor.isServer) {
  // optionally set the collection's name that synced cron will use
  SyncedCron.config({
    collectionName: 'cronschedule'
  });

  SyncedCron.add({
    name: 'Crunch some important numbers for the marketing department',
    schedule: function(parser) {
      // parser is a later.parse object
      // return parser.text('every 5 seconds');
      return parser.text('at 20:23 am');
      // return parser.recur().on(14, 15).min();
    },
    job: function(intendedAt) {

      Meteor.call('skRZks2g54SCpkda7_history');
      console.log(intendedAt);
    }
  });

  Meteor.startup(function () {
    // code to run on server at startup
    SyncedCron.start();

    // smtp = {
    //   username: 'ggy7bbo',
    //   password: 'gudwp2084',
    //   server: 'smtp.gmail.com',
    //   port: 465
    // };

    // process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    // process.env.MAIL_URL="smtp://ggy7bbo%40gmail.com:gudwp2084@smtp.gmail.com:25";
    // process.env.MAIL_URL = "smtp://postmaster%40sandboxdc64b29f64044dfbb7ce15c22ea4291d.mailgun.org:gudwp4920@smtp.mailgun.org:587";
    // process.env.MAIL_URL="smtp://ggybbo%40codexbrige.com:gudwp4920@smtp.gmail.com:587";
    // process.env.MAIL_URL = "smtp://postmaster%40sandboxdc64b29f64044dfbb7ce15c22ea4291d.mailgun.org:ca54aa55d6283a26da415c2167539ece@smtp.mailgun.org:587";

    //
    // Email.send({
    //   from: "meteor.email.2014@gmail.com",
    //   to: "ggy7bbo@gmail.com",
    //   subject: "Meteor Can Send Emails via Gmail",
    //   text: "Its pretty easy to send emails via gmail."
    // });

    // Accounts.emailTemplates = {
    //   from: 'Administrator <user@example.com>',
    //   siteName: 'DjSocialClub',
    //   verifyEmail: {
    //     subject: function(user) {
    //       return 'Verification email from Example.com';
    //     },
    //     text: function(user, url) {
    //       return 'Hi,\n' +
    //         'Please open the link below to verify your account on Example.com:\n' + url;
    //     }
    //   }
    // };

    // Stop jobs after 15 seconds
    // Meteor.setTimeout(function() { SyncedCron.stop(); }, 150 * 1000);
  });
}
