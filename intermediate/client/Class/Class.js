import { Meteor } from 'meteor/meteor';

Template.Class.onCreated(function() {
  var self = this;
  self.autorun(function() {
      var id = FlowRouter.getParam('id');
      self.subscribe('singleClass', id);
      self.subscribe('classroom');
      self.subscribe('myclassroom');
      self.subscribe('question');
  });
});

Template.Class.helpers({
  classroom: ()=> {
    return Classroom.find();
  },
  checkTime: (count)=> {
    if(2 <= count){
      return true;
    }
    else{
      return false;
    }
  },
  checkMyClass: (list)=> {
    var cid = Meteor.user();
    return _.contains(list, cid._id);
  }
});

Template.Class.events({
  'click .toggle-menu': function() {
    Meteor.call('enroll', this._id, this.count, this.list); //Classroom의 필드 list에 회원목록 추가, 삭제 and 필드 count 등록된 회원 숫자 update
    Meteor.call('enrollMyClass', this._id, this.title); //Myclassroom 컬렉션 등록, 삭제
    // Meteor.call('toggleClassItem', this._id, this.list); //Classroom의 필드 inMyClass 상태변경
  }
});
