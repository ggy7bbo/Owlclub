Question = new Meteor.Collection('question');

Question.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

question = new SimpleSchema({
  patron_id:{
    type: String,
    label: "patron_id"
  },  
  title: {
    type: String,
    label: "Title",
    optional: true
  },
  question: {
    type: String,
    label: "Question"
  },
  Debate: {
    type: Boolean,
    label: "Types",
    defaultValue: true
  }
});

Question.attachSchema( question );
