// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
Words.insert({word : 'Hello', status : 0, postsCount : 0});
Words.insert({word : 'Noise', status : 0, postsCount : 0});
Words.insert({word : 'Lovely', status : 1, postsCount : 0});
Words.insert({word : 'Farm', status : 2, postsCount : 0});
Words.insert({word : 'Protection', status : 3, postsCount : 0});
Words.insert({word : 'Never', status : 3, postsCount : 0});
  
Meteor.users.insert({ 
  "profile" : {  }, "services" : { "password" : { "srp" : { "identity" : "eLgaqsBfcRzR8AdFW", "salt" : "bHCHWbwS9Y8WWg76P",
 "verifier" : "18f37fc235c32f42186350ca2a159e04f79734c9fd4880fd5fbecfed8a5e686f69825dcc375550ccad3697627ba0961fe19b01994fe90255196d956920ce545d9833e200bcaae54d9126c2219b6465c221293a36ce35e1cad7dabcc16e1b2cf101c72fc6fa9d35ee36b12bdb7e5fc9660595034acc7e0fa390a1e288895306a" } },
 "resume" : { "loginTokens" : [ ] } }, "username" : "user11" }    
);
Meteor.users.insert({                                                                                                    
"profile" : {  }, "services" : { "password" : { "srp" : { "identity" : "6exGQEnMmuJdbxfoZ", "salt" : "tsccGBPpH9Efnkc3h",
"verifier" : "68d13db29ddb17a6eb62a55196245a021df99e3d55cfe30fe3178545e2e001481771d26bd727897e5270130c40484200b4c16d9f361ee75ef6f279d1a42f638404636e1ccdc61a4992e0e283baa50e23336a8f04b5903146e75f61bba6675cf20b2003217443e9bcd17d15bc1b412ba48c626e2cfd3c81abbecaa5bda51af371" } },
"resume" : { "loginTokens" : [ ] } }, "username" : "user12" }                                                                                                    
);                                                                                                                                                                                                                       
Meteor.users.insert({                   
"profile" : {  }, "services" : { "password" : { "srp" : { "identity" : "2yKoMX6iiRR6dAXNT", "salt" : "ano3Dee4pvQNJFj8w",
"verifier" : "dba567a7b9521a494597d3ffa1f56844a5a456dd512594e58b94da4e9b33a98df50e08fc1db281f4089c9e058199c5bb4a4f4acb8799e801f1558e3b1638941714fa4e4aac7bdbca0aa52da69acae85fc2b86c4e83ce9a0d683f756613045ade0e375099086c8ebc97498d7c4dc8c8bd4b8f870efa37a8fb3b201d300d627b88" } },
"resume" : { "loginTokens" : [ ] } }, "username" : "user13" }      
);                                                                                                            
  
words = Words.find({}).fetch();
users = Meteor.users.find({}).fetch();
 
  var postid = Posts.insert({
    title: 'Girl',
    poem: "Is there anybody going to listen to my story All about the girl who came to stay? She's the kind of girl you want so much It makes you sorry Still, you don't regret a single day Ah girl",
    userId: users[0]._id,
    wordId: words[2]._id,
    author: users[0].username,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: postid,
    userId: users[2]._id,
    author: users[2].usrename,
    submitted: now - 5 * 3600 * 1000,
    body: 'Yes i like girls!?'
  });
  
  Comments.insert({
    postId: postid,
    userId: users[0]._id,
    author: users[0].username,
    submitted: now - 3 * 3600 * 1000,
    body: 'I know'
  });
  
  Posts.insert({
    title: 'Lucy In the sky with diamonds',
    poem: "Picture yourself in a boat on a river With tangerine trees and marmalade skies Somebody calls you, you answer quite slowly A girl with kaleidoscope eyes",
    userId: users[2]._id,
    wordId: words[3]._id,    
    author: users[2].username,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'Doctor Robert',
    poem: "Ring my friend, I said you call Doctor Robert Day or night he'll be there any time at all, Doctor Robert Doctor Robert, you're a new and better man He helps you to understand He does everything he can, Doctor Robert",
    userId: users[2]._id,
    wordId: words[3]._id,    
    author: users[2].username,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

                                                                                                  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Drive my car' + i,
      poem: "Baby you can drive my car Yes I'm gonna be a star Baby you can drive my car And maybe I love you Beep beep'm beep beep yeah",
      author: users[1].username,
      userId: users[1]._id,
      wordId: words[4]._id,      
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}