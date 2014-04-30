Meteor.publish('posts', function(query,options) {
  return Posts.find(query, options);
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('singleWord', function(id) {
  return id && Words.find(id);
});

Meteor.publish('wordPosts', function(id) {
  return id && Posts.find({'wordId' : id}); 
});

Meteor.publish('pastWords', function() {
  return Words.find({});
});

Meteor.publish('currentWords', function() {
  //return Words.find({status : {$all : [1,2]}});
  return Words.find({});
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});