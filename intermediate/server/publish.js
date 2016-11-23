Meteor.publish('recipes', function() {
  return Recipes.find({author: this.userId});
});

Meteor.publish('material', function() {
  return Materials.find();
});

Meteor.publish('singlematerial', function(id) {
  check(id, String);
  return Materials.find({_id: id});
});

Meteor.publish('myclassroom', function() {
  return Myclassroom.find({});
});

Meteor.publish('classroom', function() {
  return Classroom.find({});
});

Meteor.publish('singleClass', function(id) {
  return Classroom.find({_id: id});
});

Meteor.publish('singleRecipe', function(id) {
  check(id, String);
  return Recipes.find({_id: id});
});
