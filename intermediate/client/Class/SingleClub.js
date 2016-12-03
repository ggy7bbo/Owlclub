Template.SingleClub.onCreated(function() {
  var self = this;

  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    Session.set('thisClass', id);
    self.subscribe('material');
    self.subscribe('classroom');
    self.subscribe('myclassroom');
    self.subscribe('singlematerial', id);
  });
});

Template.SingleClub.helpers({
  singleMaterial: ()=> {
    var id = FlowRouter.getParam('id');
    return Materials.findOne({_id: id});
  },
  question: ()=> {
    var key = Myclassroom.find({}).fetch();
    var keyValue = key[0].classname;

    var id = Classroom.find({_id: keyValue}).fetch();

    return id[0].count;

    // return keyValue;
    // var key = Myclassroom.find({});
    // var keyValue = key[0].author;

    // var id = Classroom.find({_id: })
    // var limit_Val = Classroom.find({_id: id}).fetch();
    // var limit = limit_Val[0].count;
    // alert(limit_Val);

    // return keyValue;
  },
  singleLIst: () => {
    var thisSingMaterial = Session.get('thisClass');

    var getListMaterial = Myclassroom.find({_id: thisSingMaterial});
    var aGetListMaterial = getListMaterial[0].count;

    return thisSingMaterial;
  },
  showMyClassRoom: () => {
    var myClass = Myclassroom.find({}).fetch();
    var myClassTag = myClass.inMyClass;
    var abc = [];
    // for(var i=0; i<myClass.length; i++){
    //   alert(myClass[i].inMyClass);
    // }
    abc = _.toArray(myClass);
    return abc;
    // _.each(myClass, function(){
    //   push("abc",this.inMyClass);
    // });
    // return _.toArray(myClassTag);
    // return abc;
    // alert(abc);
    // _.each(myClassTag, function(doc) {
    //   Myclassroom.insert(doc);
    // });
    // alert(myClass);
  },
  showMaterials: () => {
    return Materials.find({});
  }
});
