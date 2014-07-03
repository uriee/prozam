Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [
      Meteor.subscribe('notifications'),
      Meteor.subscribe('liveWords'),
            Meteor.subscribe('images')
    ]
  }
});

WordsListController = RouteController.extend({
  template: 'wordsList',
  increment: 5, 
  limit: function() { 
    return 5;
    //parseInt(this.params.wordsLimit) || this.increment; 
  },
  sort: function() {
    return {status : 1};
  }  
});

PostsListController = RouteController.extend({
  template: 'postsList',
  data: function() {
    return {
      sort :this.sort,
      query : this.query,
      my : this.my,
      limit : 13
    };
  }
});

NewPostsListController = PostsListController.extend({
  sort: {submitted: -1, _id: -1},
  query : {}
});


BestPostsListController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  query : {}
});

MyBestPostsListController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
      query : {},
      my : {my : 1}
});

BestWordPostsListController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestPosts.path({postsLimit: this.limit() + this.increment})
  },
  query: {}
});

Router.map(function() {
  this.route('start', {
    path: '/',
    controller: NewPostsListController
  });
      
  this.route('home', {
    path: '/home',
    controller: NewPostsListController
  });
      
  this.route('dashborad', {
    path: '/dashboard',
    controller: NewPostsListController
  });      
  
  this.route('newPosts', {
    path: '/new/:postsLimit?',
    controller: NewPostsListController
  });
  
  this.route('bestPosts', {
    path: '/best/:postsLimit?',
    controller: BestPostsListController
  });

  this.route('myBestPosts', {
    path: '/mybest/:postsLimit?',
    controller: MyBestPostsListController
  });
  
  this.route('pastWords', {
    path: '/pastwords/:wordsLimit?',
    controller: WordsListController
  });

  this.route('wordPage', {
    path: '/words/:_id',
    waitOn: function() {
      return [
          Meteor.subscribe('singleWord', this.params._id)
      ];
    },
    data: function() {
      return {
        sort : {votes: -1, submitted: -1, _id: -1},
        limit : 13,
        query : {'word._id' : this.params._id},
        wordId : this.params._id
      };
    }
  });
  
  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singlePost', this.params._id),
        Meteor.subscribe('comments', this.params._id)
      ];
    },
    data: function() { return Posts.findOne(this.params._id); }
  });
  
  this.route('postEdit', {
    path: '/posts/:_id/edit',
    waitOn: function() { 
      return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id); }
  });
  
  this.route('postSubmit', {
    path: '/submit',
    progress: {enabled: false}
  });
});


var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    pause();
  }
}



Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(function() { clearErrors() });
