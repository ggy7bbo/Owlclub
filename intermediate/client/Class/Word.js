Template.Word.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
    self.subscribe('material');
    self.subscribe('myclassroom');
    self.subscribe('materialClub', id);
    self.subscribe('word');
  });
});

Template.Word.helpers({
  myWord: function(pid) {
    var id = FlowRouter.getParam('id');
    var limit_Val = Classroom.find({_id: id}).fetch();
    var limit = limit_Val[0].count;
    var limitalg = 6 / limit;

    var list = Word.find({patron_id: pid}).fetch();
    var number = [];
    for (var i = 0; i < list.length ; i++){
      var select = Math.floor(Math.random() * list.length);

      number[i] = list.splice(select, 1)[0];
    }

    return Word.find({patron_id: pid},{limit : limitalg});
    // return number;
    // return element;
    // return randomElement;
  }
});

Template.Word.events({
});
