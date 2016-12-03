Template.Header.events({
   'click .logout': function(event){
      event.preventDefault();

      Meteor.logout(function(error) {
         if(error) {
            console.log("ERROR: " + error.reason);
         }
      });
   },
   'click .login': function(event){
      event.preventDefault();

      FlowRouter.go('/login');
   }
});
