Template.register.events({
    'submit .register-form': function (event) {

        event.preventDefault();


        var email = event.target.email.value;
        var password = event.target.password.value;
        var name = event.target.name.value;

        var user = {'email':email,password:password,profile:{Name:name}};

        Accounts.createUser(user,function(err){
            if(!err) {
              FlowRouter.go('/');
            }
        });
    }
});
