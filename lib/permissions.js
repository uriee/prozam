// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

livePosts = function(postId) {
  var post = Posts.findOne(postId);
  var status = Words.findOne({_id : post.wordId}).status;
  return status && (status < 4);
}