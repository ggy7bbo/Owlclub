import { Meteor } from 'meteor/meteor';

Template.Addmaterial.onCreated(function() {
  var self = this;
  self.autorun(function() {
      self.subscribe('material');
      self.subscribe('classroom');
  });
});

Template.Addmaterial.helpers({
  materials: ()=> {
    return Myclassroom.find();
  }
});
