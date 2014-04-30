Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
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
  return Posts.find({status : {$all : [1,2]}});
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});