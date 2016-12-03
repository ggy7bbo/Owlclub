// Template.register.events({
//     'submit .register-form': function (event) {
//
//         event.preventDefault();
//
//         var email = event.target.email.value;
//         var password = event.target.password.value;
//         var firstname = event.target.firstname.value;
//         var lastname = event.target.lastname.value;
//
//         var user = {'email':email,password:password,profile:{name:firstname +" "+lastname}};
//
//         Accounts.createUser(user,function(err){
//             if(!err) {
//                 FlowRouter.go('class');
//             }
//         });
//     }
// });

// Template.login.events({
//     'submit .login-form': function (event) {
//         event.preventDefault();
//         var email = event.target.email.value;
//         var password = event.target.password.value;
//
//         Meteor.loginWithPassword(email,password,function(err){
//             if(!err) {
//                 FlowRouter.go('/class');
//             }
//         });
//     }
// });
//
// Template.login.events({
//     'click #login-button': function(e, t) {
//         e.preventDefault();
//         var email = $('#login-email').val(),
//             password = $('#login-password').val();
//
//         Meteor.loginWithPassword(email, password, function(error) {
//             if (error) {
//                 return swal({
//                     title: "Email or password Incorect",
//                     text: "Please try again or create an account",
//                     timer: 1700,
//                     showConfirmButton: false,
//                     type: "error"
//                 });
//             } else {
//                 FlowRouter.go('/');
//             }
//         });
//         return false;
//     }
// });

Template.login.events({
    'click #login-button': function(e, t) {
        e.preventDefault();
        var email = $('#login-email').val(),
            password = $('#login-password').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return swal({
                    title: "Email or password Incorect",
                    text: "Please try again or create an account",
                    timer: 1700,
                    showConfirmButton: false,
                    type: "error"
                });
            } else {
                FlowRouter.go('/');
            }
        });
        return false;
    }
});
