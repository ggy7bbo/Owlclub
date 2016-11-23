var countdown = new ReactiveCountdown(120);

Template.foo.helpers({
    getCountdown: function() {
        return countdown.get();
    }
});

Template.foo.events({
  'click .toggle-menu': function() {
    countdown.start(function() {

      return;

    });
  }
});
