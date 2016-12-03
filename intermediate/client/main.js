// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import { Accounts } from 'meteor/accounts-base';

// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
// });
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// AdminConfig = {
//   adminEmails: ['ggybbo@naver.Comments'],
//   collections:
//     {
//       classroom: {},
//       recipes: {}
//     }
//   }

// Accounts.ui.config({
//   extraSignupFields: [{
//           fieldName: 'first-name',
//           fieldLabel: 'First name',
//           inputType: 'text',
//           visible: true,
//           validate: function(value, errorFunction) {
//             if (!value) {
//               errorFunction("Please write your first name");
//               return false;
//             } else {
//               return true;
//             }
//           }
//       },
//       {
//           fieldName: 'last-name',
//           fieldLabel: 'Last name',
//           inputType: 'text',
//           visible: true,
//       }]
// });

// Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });
