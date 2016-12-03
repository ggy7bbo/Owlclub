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

    // var array = Question.find({}).fetch();
    // var randomIndex = Math.floor( Math.random() * array.length );
    // var element = array[randomIndex];
    //
    // var n = db.Question.count(query);
    // var r = Math.floor(Math.random() * n);
    // var randomElement = db.Question.find({}).limit(limitalg).skip(r);

    return Word.find({patron_id: pid},{limit : limitalg});
    // return element;
    // return randomElement;
  }
});

Template.Word.events({
});
