Posts = new Meteor.Collection('posts');

Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'poem', 'title').length > 0);
  }
});

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
        word = Words.findOne({status : 1});
      postWithSameLink = Posts.findOne({url: postAttributes.url});
    
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");
    
    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a headline');
    
    // check that there are no previous posts with the same link
    if (postAttributes.url && postWithSameLink) {
      throw new Meteor.Error(302, 
        'This link has already been posted', 
        postWithSameLink._id);
    }
    
    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'title', 'poem'), {
      userId: user._id,
      word: {_id : word._id,word : word.word},
      author: user.username, 
      submitted: new Date().getTime(),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
    
    var postId = Posts.insert(post);
    Words.update({_id : word._id},{$inc : {postsCount : 1}});
    return postId;
  },
  
  upvote: function(postId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    if (!livePosts(postId))
      throw new Meteor.Error(401, "This post cant get votes");
    
    Posts.update({
      _id: postId, 
      upvoters: {$ne: user._id}
    }, {
      $addToSet: {upvoters: user._id},
      $inc: {votes: 1}
    });
  },
  
  delete: function(id){
    word = Words.findOne({status : 1});
    Words.update({_id : word._id},{$inc : {postsCount : -1}});
    Posts.remove(id);
    Router.go('home');
}
});