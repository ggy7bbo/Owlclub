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
  myround: ()=> {
    var id = FlowRouter.getParam('id');
    var limit_Val = Classroom.find({_id: id}).fetch();
    var limit = limit_Val[0].count;
    var limitalg = 10 / limit;

    // var array = Question.find({}).fetch();
    // var randomIndex = Math.floor( Math.random() * array.length );
    // var element = array[randomIndex];
    //
    // var n = db.Question.count(query);
    // var r = Math.floor(Math.random() * n);
    // var randomElement = db.Question.find({}).limit(limitalg).skip(r);

    return Round.find({},{limit : limitalg});
    // return element;
    // return randomElement;
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
