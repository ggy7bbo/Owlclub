Round = new Meteor.Collection('round');

Round.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

roundSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: true
  },
  Topic: {
    type: String,
    label: "Topic"
  },
  First: {
    type: String,
    label: "First"
  },
  FirstAgree: {
    type: String,
    label: "FirstAgree"
  },
  FirstDisagree: {
    type: String,
    label: "FirstDisagree"
  },
  Second: {
    type: String,
    label: "First"
  },
  SecondAgree: {
    type: String,
    label: "SecondAgree"
  },
  SecondDisagree: {
    type: String,
    label: "SecondDisagree"
  },
  Third: {
    type: String,
    label: "Third"
  },
  ThirdAgree: {
    type: String,
    label: "ThirdAgree"
  },
  ThirdDisagree: {
    type: String,
    label: "ThirdDisagree"
  },
  State: {
    type: Boolean,
    label: "State",
    optional: true,
    defaultValue: true
  }
});

Round.attachSchema( roundSchema );
