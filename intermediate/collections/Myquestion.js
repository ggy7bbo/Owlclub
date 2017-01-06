Myquestion = new Meteor.Collection('myquestion');

Myquestion.allow({
  insert: function(userId, doc) {
    console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

myquestion = new SimpleSchema({
  question:{
    type: String,
    label: "questionList",
    optional: true
  },
  history:{
    type: Array,
    optional: true
  },
  "history.$":{
    type: Object,
    optional: true
  },
  "history.$.name": {
    type: String,
    label: "names",
    optional: true
  },
  "history.$.content": {
    type: Array,
    label: "Contents",
    optional: true
  },
  "history.$.content.$":{
    type: String,
    optional: true
  },
  "history.$.level": {
    type: String,
    label: "level",
    optional: true
  },
  createBy:{
    type: String,
    label: "createBy",
    optional: true
  }
});

Myquestion.attachSchema( myquestion );

Meteor.methods({
  myquestion: function(qlist){
    // alert(qlist);
    // console.log(qlist.length);
    _.each(qlist, function(item){
      var items = _.pick(item, '_id');
      var qitems = _.values(items);
      _.each(qitems, function(it){
        Myquestion.insert({question: it});
      });
    });

    // var keys = _.pick(qlist[0], '_id');
    // console.log(keys);

    // _.each(qlist, function(key, item){
    //   console.log(key);
    //   Myquestion.insert({question: item._id});
    // });
    // Myquestion.insert({question: qlist._id});
  },
  skRZks2g54SCpkda7_history: function(){
    var classRoomDetails = Classroom.find({_id: "skRZks2g54SCpkda7"}).fetch();
    var classRoomList = classRoomDetails[0].list;
    var classRoomContents = classRoomDetails[0].history;
    console.log(classRoomList);
    classRoomList.forEach(function(v,i){
      // Myquestion.update({createBy: v}, {$set: {history: {name: "1111", content: ["x9F7L44TwbdbvNx9Y", "qTgqnhZYeac7p95Kb"] }, createBy: v}}, { upsert: true });
      Myquestion.update({createBy: v},
        {
          $set: {
            createBy : v,
            // 'history.name' : "jbqL52t2DxhPc6n4e",
            // 'history.content' : classRoomContents,
            // 'history.level' : "Intermediate",
            // history: {
            //   name: "jbqL52t2DxhPc6n4e",
            //   content: classRoomContents,
            //   level: "Intermediate"
            // }
            "history.$.name": "jbqL52t2DxhPc6n4e",
            "history.$.content": classRoomContents,
            "history.$.level": "pre-Intermediate"
          // history: {
          //   name : "name",
          //   content: ["content", "content1"]
          // }
          // sample: "test"
        }
      },{ upsert: true });
    });
    // _.each(classRoomlist, function(id){
    //   Myquestion.update({createBy: id}, {$set: {history: ["1111", "3333"], createBy: id}}, { upsert: true });
    // });
    // Myquestion.update({createBy: currentUserId}, {$set: {history: ["1111", "3333"], createBy: currentUserId}}, { upsert: true });
  }
});
