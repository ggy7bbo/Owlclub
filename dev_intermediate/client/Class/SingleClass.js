Template.SingleClass.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleClass', id);
  });
});

Template.SingleClass.helpers({
  singleClass: ()=> {
    var id = FlowRouter.getParam('id');
    console.log(id);
    return Classroom.findOne({_id: id});
  }
});
