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
    type: [String],
    label: "userlist",
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
  formatlist: {
    type: [String],
    optional: true,
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
    // enrollClass : function(id, currentState, count){
    //   if(currentState){
    //     Classroom.update(id, {
    //       $set: {
    //         enroll: !currentState,
    //         count: count - 1
    //       },
    //     });
    //   }
    //   else{
    //     Classroom.update(id, {
    //       $set: {
    //         enroll: !currentState,
    //         count: count + 1
    //       },
    //     });
    //   }
    // },
    enroll: function(id, count, list){
      // Classroom.update(id, {
      //   $set: {
      //     list: title
      //   }
      // });
      // alert(list.length);

      var listCheck = _.contains(list, this.userId);

      if(listCheck){
        Classroom.update(id, {
          $pull: {
            list: this.userId
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
            list: this.userId
          }
        });
        Classroom.update(id, {
          $set: {
            count: list.length + 1
          }
        });
      }
      //
      // Classroom.update(id, {
      //   $set: {
      //     count: list.length
      //   }
      // });
    },
    // toggleClassItem: function(id, currentState, list) {
    //   // var list = _.contains(list, this.userId); //Classroom에 내가 등록했는지 검사 :: true, false]
    //   // //
    //   // // if(true){
    //   // //   alert(list);
    //   // //     // Myclassroom.update({author: this.userId},{
    //   // //     //   $set: {
    //   // //     //     inMyClass: true
    //   // //     //   }
    //   // //     // });
    //   // // }else{
    //   // //   alert(2222);
    //   // //   // Myclassroom.update({author: this.userId},{
    //   // //   //   $set: {
    //   // //   //     inMyClass: false
    //   // //   //   }
    //   // //   // });
    //   // // }
    //   //
    //   // Classroom.update(id, {
    //   //   $set: {
    //   //     inClass: !currentState
    //   //   }
    //   // });
    // }
});

Classroom.attachSchema( classRoom );
