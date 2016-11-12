import { Meteor } from 'meteor/meteor';

Template.Class.onCreated(function() {
  var self = this;
  self.autorun(function() {
      self.subscribe('classroom');
      self.subscribe('myclassroom');
  });
});

Template.Class.helpers({
  classroom: ()=> {
    return Classroom.find();
  },
  showUserCount: ()=>{
    return Classroom.find({enroll: true});
  },
  showClass: ()=>{
    return Myclassroom.find({});
  }
});

Template.Class.events({
  'click .toggle-menu': function() {

    alert(Classroom.find({_id: this._id}).fetch());

    Meteor.call('testEnroll', this._id, Meteor.userId());
    Meteor.call('enrollMyClass', this.author, this.title);
  }
});
