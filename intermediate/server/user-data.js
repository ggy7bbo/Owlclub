// Publishing third party oauth service specifically to client
// Meteor.publish('userData', function() {
//     var currentUser;
//     currentUser = this.userId;
//     if (currentUser) {
//         return Meteor.users.find({
//             _id: currentUser
//         }, {
//             fields: {
//                 // Default
//                 "emails": 1,
//                 // Created profile property
//                 "profile": 1,
//                 // Created roles property
//                 "roles": 1
//             }
//         });
//     } else {
//         return this.ready();
//     }
// });
Accounts.onCreateUser(function(options, user) {
  // Use provided profile in options, or create an empty profile object
  user.profile = options.profile || {};

  // Assigns the first and last names to the newly created user object
  // user.profile.Name = options.Name;

  // Basic Prof Picture Setup
  // user.profile.profPicture = Meteor.absoluteUrl() + "img/default/user.jpg";
  // Organization
  //Basic Role Set Up
  Roles.addUsersToRoles(user._id, ['guest','user','Admin']);

  // we wait for Meteor to create the user before sending an email
  // Meteor.setTimeout(function() {
  //   Accounts.sendVerificationEmail(user._id);
  // }, 2 * 1000);

  // Returns the user object
  return user;
});
