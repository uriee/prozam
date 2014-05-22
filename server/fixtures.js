// Fixture data 
if (Words.find().count() === 0) {
  var now = new Date().getTime();

newWords.insert({word:'North'});  
newWords.insert({word:'Glory'}); 
newWords.insert({word:'Fish'}); 
newWords.insert({word:'Light'}); 
newWords.insert({word:'Stimulation'}); 
newWords.insert({word:'Story'}); 
newWords.insert({word:'Fast'});   
newWords.insert({word:'Steam'});   
newWords.insert({word:'NeverMind'}); 
newWords.insert({word:'Night'});   
Words.insert({word : 'Lovely', status : 1, postsCount : 0});
/*  
Words.insert({word : 'Farm', status : 2, postsCount : 0});
Words.insert({word : 'Protection', status : 3, postsCount : 0});
Words.insert({word : 'Never', status : 3, postsCount : 0});
Accounts.createUser({username : 'user11', email: 'user11@user.com', password: 'user11u'});
Accounts.createUser({username : 'user14', email: 'user14@user.com', password: 'user14u'});
Accounts.createUser({username : 'user13', email: 'user13@user.com', password: 'user13u'});  
Accounts.createUser({username : 'user12', email: 'user12@user.com', password: 'user12u'});  

Meteor.users.insert({
"emails" : [  {  "address" : "user14@user.com",  "verified" : false } ], "profile" : {"username" : "user14"  }, "services" : { "password" : { "srp" : { "identity" : "H647JDghFWvQWFfRx", "salt" : "GDkjPRoSEu6ZPCjM8",
"verifier" : "a8c66cfeae8851a7a89fdf6e81292cdb3c4f9c0f6eb78fab2d968ef0aab414b369d531bd1a4aa6f863b51fce04f0a796ccd63c2314fffb1be5739cd0dd1c195e946e5b452cd98b27fa2901322484e0af5085a2fe0500deb077753dca8419fda044be789e3472ed50f2499dee5125b6eda06a6f23da9a39a0d453168bd6b00506" } },
"resume" : { "loginTokens" : [ ] } } } 
);

Meteor.users.insert({
"emails" : [  {  "address" : "user12@user.com",  "verified" : false } ], "profile" : {"username" : "user12"  }, "services" : { "password" : { "srp" : { "identity" : "uPBAbeJWLxxj2pNAu", "salt" : "PoDbBhZ6M8dtWnGft",
"verifier" : "6e2b4602eed1257c093ecc6d3eb0db1c3eb6269fc9ace028b890472fe833448941b66ff59dc071ca44b3a8fe40cc9fabc05da0b7908d1443fb1994b5a896b6c8b65618ce05748da7609052010543b0c93d3790a6c014afa934c9e3af973bfbd8b968f71335a50f513c9fe86d1c1e563460645ee7d8874ca6d23e233516da2cc6" } },
"resume" : { "loginTokens" : [ ] } } }   
);

Meteor.users.insert({
"emails" : [  {  "address" : "user13@user.com",  "verified" : false } ], "profile" : {"username" : "user13"  }, "services" : { "password" : { "srp" : { "identity" : "YW8kLEf8cfS9Au496", "salt" : "8JZ9qJT3aubatPJvZ",
"verifier" : "e3b94b9f091b46d9922bbc6e3fa5fc7d2ec62668472a2bf4be7f3ad10b7511826b19c4acdde23595b18c221643ba0a31453933ca8781373f6066f2d3a38974053b244ffa09f5f345c1c767885dc4c49aaec11f2b6635fdafbcb7f0a742d4cf6cee0139f7a5238a41c5b71e860ad2650d55f0b4097c448924ed4b779f28fa70f5" } },
"resume" : { "loginTokens" : [ ] } } }   
);      

  
words = Words.find({}).fetch();
users = Meteor.users.find({}).fetch();
 
  var postid = Posts.insert({
    title: 'Girl',
    poem: "Is there anybody going to listen to my story All about the girl who came to stay? She's the kind of girl you want so much It makes you sorry Still, you don't regret a single day Ah girl",
    userId: users[0]._id,
    word: {_id : words[0]._id, word : words[0].word},
    author: users[0].username,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0, upvotersName: []
  });
  
  Comments.insert({
    postId: postid,
    userId: users[2]._id,
    author: users[2].username,
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
    word: {_id : words[1]._id, word : words[1].word},
    author: users[2].username,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0, upvotersName: []
  });
  
  Posts.insert({
    title: 'Doctor Robert',
    poem: "Ring my friend, I said you call Doctor Robert Day or night he'll be there any time at all, Doctor Robert Doctor Robert, you're a new and better man He helps you to understand He does everything he can, Doctor Robert",
    userId: users[2]._id,
    word: {_id : words[2]._id, word : words[2].word},
    author: users[2].username,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0, upvotersName: []
  });

                                                                                                  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Drive my car' + i,
      poem: "Baby you can drive my car Yes I'm gonna be a star Baby you can drive my car And maybe I love you Beep beep'm beep beep yeah",
      author: users[1].username,
      userId: users[1]._id,
      word: {_id : words[3]._id, word : words[3].word},      
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
    upvoters: [], votes: 0, upvotersName: []
    });
  }
  */
}