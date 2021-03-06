Meteor.publish('recipes', function() {
  return Recipes.find({author: this.userId});
});

Meteor.publish('users', function() {
  return Users.find({});
});

Meteor.publish('material', function() {
  return Materials.find();
});

Meteor.publish('myclassroom', function() {
  return Myclassroom.find({});
});

Meteor.publish('classroom', function() {
  return Classroom.find({});
});

Meteor.publish('question', function() {
  return Question.find({});
});

Meteor.publish('round', function() {
  return Round.find({});
});

Meteor.publish('word', function() {
  return Word.find({});
});

Meteor.publish('myquestion', function(){
  return Myquestion.find({});
});

Meteor.publish('selfquestion', function(id){
  return Myquestion.find({createBy: id});
});

Meteor.publish('singleClass', function(id) {
  return Classroom.find({_id: id});
});

Meteor.publish('singleRecipe', function(id) {
  check(id, String);
  return Recipes.find({_id: id});
});
