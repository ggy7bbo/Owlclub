Template.SingleMaterial.onCreated(function() {
  var self = this;

  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('material');
    self.subscribe('classroom');
    self.subscribe('myclassroom');
  });
});

Template.SingleMaterial.helpers({
  showMaterials: () => {
    return Materials.find({});
  }
});
