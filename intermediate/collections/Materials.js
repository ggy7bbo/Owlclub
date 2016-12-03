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

qnalist = new SimpleSchema({
  name: {
    type: String
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
  types: {
    type: [String],
    optional: true,
    allowedValues: ['Impromptu', 'Debate', 'LearnWord', 'Book'],
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "Impromptu", value: "Impromptu"},
          {label: "Debate", value: "Debate"},
          {label: "LearnWord", value: "LearnWord"},
          {label: "Book", value: "Book"}
        ];
      }
    }
  },
  category: {
    type: String,
    label: "Category",
    allowedValues: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
    optional: true,
    autoform:{
      options: [
        {label: "monday", value: "Monday"},
        {label: "wednesday", value: "Wednesday"},
        {label: "friday", value: "Friday"},
        {label: "sunday", value: "Sunday"}
      ]
    }
    // autoform: {
    //   type: 'tinyMCE',
    //   data: {
    //       /**
    //       *   tinyMCE initialization options
    //       *   "skin_url" is not customizable for now*
    //       *   See https://www.tinymce.com/docs/configure/editor-appearance/
    //       */
    //       height: 300,
    //       statusbar: false,
    //       menubar: false
    //   }
    // }
  },
  introduction: {
    type: String,
    optional: true,
    max: 2000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "intro"
      }
    }
  },
  question: {
    optional: true,
    type: [qnalist]
  },
  counter: {
    type: Number,
    label: "ClassMember",
    autoValue: function() {
      return 0;
    },
    optional: true
  },
  order: {
    type: Number,
    label: "Order",
    optional: true
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

Meteor.methods({ //toggle-menu
    updateMaterials : function(id, count) {
      // Materials.update({category: "Monday"}, $set: {count: 0}, {upsert: true});
    }
});

Materials.attachSchema( materials );
