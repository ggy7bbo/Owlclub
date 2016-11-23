import { Meteor } from 'meteor/meteor';

Template.Myclassroom.onCreated(function() {
  var self = this;
  self.autorun(function() {
      self.subscribe('classroom');
      self.subscribe('material');
  });
});

Template.Myclassroom.helpers({
  myclassroom: ()=> {
    return Materials.find({category: "Monday"});
  }
});

Template.Class.events({
  // 'click .toggle-menu': function() {
  //   Meteor.call('enrollClass', this._id, this.enroll, this.count);
  // }
});
