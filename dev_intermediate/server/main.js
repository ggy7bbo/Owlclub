import { Meteor } from 'meteor/meteor';
import { AccountsCommon } from 'meteor/accounts-base';

// Accounts.onCreateUser(function(options, user) {
//     if (user.profile == undefined) user.profile = {};
//     _.extend(user.profile, { offices : [] });
// });

Meteor.startup(() => {
  // code to run on server at startup
});
