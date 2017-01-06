Classroom = new Meteor.Collection('classroom');

Classroom.allow({
  insert: function(userId, doc) {
    // console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
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
    type: [String],
    label: "userlist",
    optional: true
  },
  names: {
    type: [String],
    label: "userName",
    optional: true
  },
  count: {
    type: Number,
    label: "person",
    optional: true,
    defaultValue: 0
  },
  inClass: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  location: {
    type: String,
    label: "location"
  },
  leader:{
    type: [String],
    label: "leader",
    optional: true
  },
  formatlist: {
    type: [String],
    optional: true,
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "Regular", value: "Regular"},
          {label: "Debate", value: "Debate"}
        ];
      }
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
  controls: {
    type: Date,
    label: "Time",
    optional: true
  },
  history: {
    type: [String],
    label: "history",
    optional: true
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
    enroll: function(id, count, list){
      var listCheck = _.contains(list, this.userId);
      var user = Meteor.users.findOne({_id: this.userId});
      var userName = user.username;

      if(listCheck){
        Classroom.update(id, {
          $pull: {
            list: this.userId,
            names: userName
          }
        });
        Classroom.update(id, {
          $set: {
            count: list.length - 1
          }
        });
      } else {
        Classroom.update({_id:id}, {
          $addToSet: {
            list: this.userId,
            names: userName
          }
        });
        Classroom.update(id, {
          $set: {
            count: list.length + 1
          }
        });
      }
    }
});

Classroom.attachSchema( classRoom );
