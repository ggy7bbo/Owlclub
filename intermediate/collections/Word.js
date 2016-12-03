Word = new Meteor.Collection('word');

Word.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

wordex = new SimpleSchema({
  definition: {
    type: String,
    label: "Definition"
  },
  examples: {
    type: String,
    label: "Examples"
  }
});

word = new SimpleSchema({
  patron_id:{
    type: String,
    label: "patron_id"
  },  
  title: {
    type: String,
    label: "Title",
    optional: true
  },
  explain: {
    type: [wordex]
  },
  Word: {
    type: Boolean,
    label: "Types",
    defaultValue: true
  }
});

Word.attachSchema( word );
