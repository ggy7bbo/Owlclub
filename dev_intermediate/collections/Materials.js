Materials = new Meteor.Collection('material');

Materials.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

materials = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  desc: {
    type: String,
    label: "Description"
  },
  category: {
    type: String,
    label: "Category",
    allowedValues: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
    optional: true,
    autoform: {
      options: [
        {label: "monday", value: "Monday"},
        {label: "wednesday", value: "Wednesday"},
        {label: "friday", value: "Friday"},
        {label: "sunday", value: "Sunday"}
      ]
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Materials.attachSchema( materials );
