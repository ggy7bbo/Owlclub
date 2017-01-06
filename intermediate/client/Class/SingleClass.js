Template.SingleClass.onCreated(function() {
  var self = this;
  var check_Id = this._id;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    // self.subscribe('classroom');
    self.subscribe('singleClass', id);
    self.subscribe('material');
    self.subscribe('myclassroom');
    // self.subscribe('materialClub', id);
    self.subscribe('question');
    self.subscribe('selfquestion', Meteor.userId());
    // Meteor.subscribe("userData", Meteor.userId());
  });
});

Template.SingleClass.helpers({
  singleClass: ()=> {
    var id = FlowRouter.getParam('id');
    return Classroom.findOne({_id: id});
  },
  myclassroom: ()=> { // Classroom 전체 컨트롤러
    var id = FlowRouter.getParam('id');
    var limit_Val = Classroom.findOne({_id: id});
    // var limit = limit_Val.count;

    // var limitalg = Math.round(10 / limit);
    console.log(limit_Val);
    var category = limit_Val.formatlist;

    if(category == 'Debate'){
      var materials_Classroom = Materials.find({category: "Debate"}, {sort: {order: 1}}, {limit : 2}).fetch();
      console.log(materials_Classroom);
      // alert(2222);
      return materials_Classroom;
    }
    else if(category == 'Regular'){
      // alert(1111);
      var materials_Classroom2 = Materials.find({category: "Regular"}, {sort: {order: 1}}, {limit : 2}).fetch();
      console.log(materials_Classroom2);
      return materials_Classroom2;
    }
    else{
      console.log("Material Collection Error");
    }

    return;
  },
  duration: ()=> {
    var start = Session.get('startTime');
    var stopWatch = start ? Chronos.currentTime(100) - start : null; // updates every hundred milliseconds
    return 120 - Math.round(stopWatch * 0.001);
  },
  statusIs: function(a1, a2) {
    return a1==a2;
  },
  imLeader(list, id){
    var selectIndex = Math.floor(Math.random() * list.length);
    var selectLeaderName = list[selectIndex];
    var eachLeader = Materials.findOne({_id: id});
    // console.log(eachLeader._id);

    Meteor.call('electLeader', id, selectLeaderName);
    return;
    // Materials.update({_id: id}, {
    //   $set: {
    //     leader: selectLeaderName
    //   }}, { upsert : true }
    // );

    // console.log(eachLeader.leader);
    // if((eachLeader.leader) == ""){
    //   console.log("1111");
    //   Materials.update({_id: id}, {
    //     $set: {
    //       leader: selectLeaderName
    //     }}, { upsert : true }
    //   );
    // }

    // var showLeader = Meteor.users.findOne({_id: selectLeaderName}, {fields: {"username": 1}});

    // if(selectLeaderName == Meteor.userId()){
    //   return showLeader.username;
    // }
    // else{
    //   return showLeader.username;
    // }
  },
  // showOthers(list) {
  //   var reList = [];
  //   var usernames = list.map( function(v,i){
  //     var findUserList = Meteor.users.find({_id: v}, {fields: {username : 1}}).fetch();
  //     return findUserList;
  //   });
  //   // console.log(usernames[3][0].username);
  //   // var showUserNames = _.map(usernames, function(v){
  //   //   var sss = [];
  //   //   sss.push(v[0].username);
  //   // });
  //   for(var i=0; i < usernames.length; i++){
  //     reList.push(usernames[i][0].username);
  //   }
  //   // console.log(usernames.length);
  //   console.log(reList);
  //   return reList;
  //
  //   // var usernames = Meteor.users.find({_id: 'EG6KhaPdavRCWFZir'}, {fields: {username : 1}}).fetch();
  //
  //   // var usernamelist = usernames.username;
  //   // console.log(usernames[0].username);
  //   // console.log(Meteor.users.find({_id: 'EG6KhaPdavRCWFZir'}, {fields: {username : 1}}).fetch());
  //   // console.log(usernamelist);
  //   // return usernamelist;
  // }
});

Template.SingleClass.events({
  'click #start': function() {
    Session.set('startTime', new Date().getTime());
  },
  'click #stop': function() {
    Session.set('startTime', null);
  },
  'click #show_qa': function() {
    var list = Word.find({patron_id: this._id}).fetch();
    var numb = [];
    for (var i = 0; i < list.length ; i++){
      var select = Math.floor(Math.random() * list.length);
      // console.log(select);
      numb[i] = list.splice(select, 1)[0];
    }
    // console.log(select);
    console.log(numb);
    Meteor.call('myquestion', numb);
  }
});
