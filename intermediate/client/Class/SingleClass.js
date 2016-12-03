Template.SingleClass.onCreated(function() {
  var self = this;
  var check_Id = this._id;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
    self.subscribe('material');
    self.subscribe('myclassroom');
    self.subscribe('materialClub', id);
    self.subscribe('question');
    self.subscribe('users');
    // Meteor.subscribe("_roles");
  });
});

Template.SingleClass.helpers({
  singleClass: ()=> {
    var id = FlowRouter.getParam('id');
    // console.log(id);
    // var c_list = Classroom.findOne({_id: id}).fetch();
    // var c_listid = _.each(c_list, this.list);

    // var c_name = _.each(c_listid, users.find({}).fetch());
    // return c_list['list'];
    return Classroom.findOne({_id: id});
  },
  myclassroom: ()=> {

    // return Materials.find({category: "Monday"}, {limit : 1});
    var id = FlowRouter.getParam('id');
    var limit_Val = Classroom.find({_id: id}).fetch();
    var limit = limit_Val[0].count;

    //return Classroom.find({_id: id}); //Root Class Room 객체를 불러옴

    var limitalg = 10 / limit;

    return Materials.find({}, {limit : limitalg});
  },
  duration: ()=> {
    var start = Session.get('startTime');
    var stopWatch = start ? Chronos.currentTime(100) - start : null; // updates every hundred milliseconds
    return 120 - Math.round(stopWatch * 0.001);
  },
  question: ()=> {
    // return Roles.find({});
  },
  statusIs: function(a1, a2) {
    // alert(a1==a2)
    return a1==a2;
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
