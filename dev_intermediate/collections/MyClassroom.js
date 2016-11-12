Myclassroom = new Meteor.Collection('myclassroom');

Myclassroom.allow({
  insert: function(userId, doc) {
    console.log('insert_into_my_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

myClassroom = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    autoValue: function() {
      return this.userId;
    }
  },
  subject: {
    type: String,
    label: "Subject",
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

//Meteor.call('enrollMyClass', this._id, this.title);
Meteor.methods({ //toggle-menu
    enrollMyClass : function(id, title) {
      Myclassroom.update(id, {$set: {subject: title}});
      // MyClassroom.insert({subject: title});
    }
});

Myclassroom.attachSchema( myClassroom );
