if (Meteor.isClient){ //Client일 때만 로그인, 로그아웃 후 리다이렉팅 설정
  Accounts.onLogin(function() {
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home'); //별명으로 쓰인다
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('recipe-book'); //name으로 구분
    }
    // GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action(){
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'RecipeSingle',
  action(){
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});

FlowRouter.route('/addmaterial', {
  name: 'addmaterial',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Addmaterial'});
  }
});

FlowRouter.route('/class', {
  name: 'class',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Class'});
  }
});

FlowRouter.route('/class/:id', {
  name: 'SingleClass',
  action(){
    BlazeLayout.render('MainLayout', {main: 'SingleClass'});
  }
});

FlowRouter.route('/newclass', {
  name: 'newclass',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewClass'});
  }
});

FlowRouter.route('/myclassroom', {
  name: 'myclassroom',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Myclassroom'});
  }
});

if (Meteor.isServer) {
  WebApp.connectHandlers.use("/", function(req, res, next) {
    var isValidRoute = false;
    for(var i=0; i<FlowRouter._routes.length; i++){
      if (req.url == FlowRouter._routes[i].path) {
        isValidRoute = true;
        break;
      }
    }
    if(isValidRoute) {
      next();
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });
}
