Classroom = new Meteor.Collection('classroom');

Classroom.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

addUsers = new SimpleSchema({
  name: {
    type: String,
    optional: true,
  }
});

classRoom = new SimpleSchema({
  title: {
    type: String,
    label: "classroom"
  },
  desc: {
    type: String,
    label: "Description"
  },
  enroll: {
    type: Boolean,
    label: "enroll",
    defaultValue : false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  list: {
    type: [addUsers]
  },
  count: {
    type: Number,
    label: "person",
    defaultValue: 0,
    optional: true,
    autoform: {
      type: "hidden"
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

Meteor.methods({ //toggle-menu
    enrollClass : function(id, currentState, count){
      if(currentState){
        Classroom.update(id, {
          $set: {
            enroll: !currentState,
            count: count - 1
          },
        });
      }
      else{
        Classroom.update(id, {
          $set: {
            enroll: !currentState,
            count: count + 1
          },
        });
      }
    },
    testEnroll: function(id, title){
      // Classroom.update(id, {
      //   $set: {
      //     list: title
      //   }
      // });

      Classroom.update(id, {
        $set: {
          'list.0.name': title
        }
      });
    }
});

Classroom.attachSchema( classRoom );
