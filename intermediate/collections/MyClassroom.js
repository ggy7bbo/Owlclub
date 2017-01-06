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
    optional: true
  },
  classname:{
    type: String,
    label: "Classname",
    optional: true
  },
  subject:{
    type: String,
    label: "Subject",
    optional: true
  },
  inMyClass:{
    type: String,
    label: "InMyClass",
    optional: true,
  },
  state:{
    type: Boolean,
    label: "StateforDebate",
    autoValue: function(){
      return Math.random() >= 0.5;
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
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
      // Classroom.update(id, {
      //   $set: {
      //     count: list.length
      //   }
      // });
      //
      // Classroom.update(id, {
      //   $addToSet: {
      //     list: this.userId
      //   },
      // });
      var myState = Myclassroom.find({name: id}).fetch();
      // console.log(_.isEmpty(myState));
      if(_.isEmpty(myState)){
        Myclassroom.insert({name: id, inMyClass: title});
        // var names = [{name: id},{subject: title}];
        // _.each(names, function(doc) {
        //   Myclassroom.insert(doc);
        // });
      } else {
        Myclassroom.remove({name: id});
      }
      // var myStateVal = myState[0].inMyClass;
      //
      // Myclassroom.update({name: id}, {
      //   $set: {
      //     inMyClass : !myStateVal
      //   }
      // });
      // Myclassroom.upsert({name: id}, {subject: title});
    },
    toggleClassItem : function(id, thislist){
      var list = _.contains(thislist, this.userId); //Classroom에 내가 등록했는지 검사 :: true, false]

      if(list){
        return false;
      } else {
        return true;
      }
    }
});

Myclassroom.attachSchema( myClassroom );
