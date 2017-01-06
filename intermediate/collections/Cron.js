Cron = new Meteor.Collection('cron');

Cron.allow({
  insert: function(userId, doc) {
    // console.log('insert_into_classroom_DB');
    return !!userId;
  },
  update: function(userId, doc) { //update
    return !!userId;
  }
});

CronSchema = new SimpleSchema({
  intendedAt: {
    type: Date,
    label: "intendedAt",
    autoValue: function() {
      return new Date("Fri Dec 23 2016 13:25:25 GMT+0900 (KST)");
    }
  },
  findishedAt: {
    type: Date,
    label: "findishedAt",
    autoValue: function() {
      return new Date("Fri Dec 23 2016 13:25:25 GMT+0900 (KST)");
    }
  },
  name: {
    type: String,
    autoValue: function(){
      return 'Cron test for Owlclub';
    }
  },
  startedAt: {
    type: Date,
    label: "startedAt",
    autoValue: function() {
      return new Date("Fri Dec 23 2016 13:25:25 GMT+0900 (KST)");
    }
  },
  result: {
    type: String,
    autoValue: function(){
      return 'Result for Cron Job Schedule!!';
    }
  }
});

Cron.attachSchema( CronSchema );
