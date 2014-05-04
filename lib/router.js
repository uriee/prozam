Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [
      Meteor.subscribe('notifications'),
      Meteor.subscribe('currentWords')
    ]
  }
});

WordsListController = RouteController.extend({
  template: 'wordsList',
  increment: 20, 
  limit: function() { 
    return parseInt(this.params.wordsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.limit()};
  },
  waitOn: function() {
    return Meteor.subscribe('pastWords', this.findOptions());
  },
  nextPath: function() {
    return Router.routes.words.path({wordsLimit: this.limit() + this.increment})
  },
  words: function() {
    return Words.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.words().count() === this.limit();
    return {
      words: this.words(),
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

PostsListController = RouteController.extend({
  template: 'postsList',
  data: function() {
    return {
      sort :this.sort,
      limit : 10
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

BestWordPostsListController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestPosts.path({postsLimit: this.limit() + this.increment})
  },
  query: {}
});

Router.map(function() {
  this.route('home', {
    path: '/',
    controller: NewPostsListController
  });
  
  this.route('newPosts', {
    path: '/new/:postsLimit?',
    controller: NewPostsListController
  });
  
  this.route('bestPosts', {
    path: '/best/:postsLimit?',
    controller: BestPostsListController,
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
        limit : 4,
        query : {wordId : this.params._id},
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
