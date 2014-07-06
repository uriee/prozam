// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

livePosts = function(postId) {
	if(!postId) return null;
  var post = Posts.findOne(postId);
  var word = Words.findOne({_id : post.word._id});
  var status = (word ? word.status : null);
  return status && (status < 4);
}


 