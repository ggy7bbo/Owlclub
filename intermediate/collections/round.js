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
  patron_id:{
    type: String,
    label: "patron_id"
  },
  title: {
    type: String,
    label: "Title",
    optional: true
  },
  Topic: {
    type: String,
    label: "Topic"
  },
  FirstAgree: {
    type: String,
    label: "FirstAgree"
  },
  FirstDisagree: {
    type: String,
    label: "FirstDisagree"
  },
  SecondAgree: {
    type: String,
    label: "SecondAgree"
  },
  SecondDisagree: {
    type: String,
    label: "SecondDisagree"
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
