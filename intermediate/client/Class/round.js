Template.Round.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
    self.subscribe('material');
    self.subscribe('myclassroom');
    self.subscribe('materialClub', id);
    self.subscribe('round');
  });
});

Template.Round.helpers({
  catch: function(id) {
    return Round.find({patron_id: id}).fetch();
  },
  state: function(){
    if(Math.random() > 0.5){
      return true;
    }
    else{
      return false;
    }
  }
});

Template.Round.events({
  'click .round_top1': function() {
    $('.round_top1').next().toggleClass('open');
  },
  'click .round_top2': function() {
    $('.round_top2').next().toggleClass('open');
  },
  'click .round_top3': function() {
    $('.round_top3').next().toggleClass('open');
  }
});
