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
    allowedValues: ['Regular', 'Debate'],
    optional: true,
    autoform:{
      options: [
        {label: "Regular", value: "Regular"},
        {label: "Debate", value: "Debate"}
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
  leader: {
    type: String,
    label: "Leader",
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
    // updateMaterials : function(id, count) {
    //   // Materials.update({category: "Monday"}, $set: {count: 0}, {upsert: true});
    // },
    electLeader : function(id, leader){
      console.log(1111);
      console.log(id);
      console.log(leader);
      Materials.update({_id: id}, {
        $set: {
          leader: "1111"
        }
      }, { upsert: true });
    }
});

Materials.attachSchema( materials );
