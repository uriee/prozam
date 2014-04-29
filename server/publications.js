Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('wordPosts', function(id) {
  return id && Posts.find({word_id : id});
});

Meteor.publish('paerWords', function() {
  return Words.find({status : 3});
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