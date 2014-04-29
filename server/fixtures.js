// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  var wordid = Words.insert({
    word : 'Hello',
    status : 0,
    postsCount : 0
  });
  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'KooKooriKoo tarnegol' }
  });
  var tom = Meteor.users.findOne(tomId);
  var u = Meteor.users.insert({
    profile: { name: 'cod Coda' }
  });
  var user = Meteor.users.findOne(u);
  
  var postid = Posts.insert({
    title: 'Introducing Telescope',
    poem: 'I was walking down the street the other day... how did i meet. another frind , aman and just said. man i can smeel your feet a mile away. SMALL WORLD!',
    userId: user._id,
    wordId : wordid,
    author: user.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: postid,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Yep,small world indeed!?'
  });
  
  Comments.insert({
    postId: postid,
    userId: user._id,
    author: user.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'pam pam pam'
  });
  
  Posts.insert({
    title: 'Meteor',
    poem: 'Picture yourself in a boat on a river With tangerine trees and marmalade skies Somebody calls you, you answer quite slowly A girl with kaleidoscope eyes',
    userId: tom._id,
    wordId : wordid,    
    author: tom.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'Meteor',
    poem: 'Follow her down to a bridge by a fountain Where rocking horse people eat marshmellow pies Everyone smiles as you drift past the flowers That grow so incredibly high',
    userId: tom._id,
    wordId : wordid,    
    author: tom.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test poem #' + i,
      poem: 'Lucy in the sky with diamonds Lucy in the sky with diamonds Lucy in the sky with diamonds Aaaaahhhhh...',
      author: user.profile.name,
      userId: user._id,
      wordId : wordid,      
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}