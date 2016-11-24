Template.SingleClass.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
    self.subscribe('material');
    self.subscribe('myclassroom');
    self.subscribe('materialClub', id);
    self.subscribe('question');
  });
});

Template.SingleClass.helpers({
  singleClass: ()=> {
    var id = FlowRouter.getParam('id');
    // console.log(id);
    return Classroom.findOne({_id: id});
  },
  myclassroom: ()=> {

    // return Materials.find({category: "Monday"}, {limit : 1});
    var id = FlowRouter.getParam('id');
    var limit_Val = Classroom.find({_id: id}).fetch();
    var limit = limit_Val[0].count;

    //return Classroom.find({_id: id}); //Root Class Room 객체를 불러옴

    var limitalg = 10 / limit;

    return Materials.find({category: "Monday"}, {limit : limitalg});
  },
  duration: ()=> {
    var start = Session.get('startTime');
    var stopWatch = start ? Chronos.currentTime(100) - start : null; // updates every hundred milliseconds
    return Math.round(stopWatch * 0.001);
  },
  question: ()=> {
    var id = FlowRouter.getParam('id');
  }
});

Template.SingleClass.events({
  'click #start': function() {
    Session.set('startTime', new Date().getTime());
  },
  'click #stop': function() {
    Session.set('startTime', null);
  }
});
