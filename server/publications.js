/*
Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});
*/

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('singleWord', function(id) {
  return id && Words.find(id);
});

Meteor.publish('posts', function(query,options) {
  return query && Posts.find(query,options); 
});

Meteor.publish('pastWords', function() {
  return Words.find({status : {$gt : 1}});
});

Meteor.publish('currentWords', function() {
  return Words.find({status : 1});
  //return Words.find({});
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});