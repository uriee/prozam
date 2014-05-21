
var pulse = function() {
  var current = Words.findOne({status : 1})
  var word = newWords.findOne({});
  var livewords = Words.find({status : {lt : 5}});
  _.map(livewords.fetch(),function(w){
    var wordPosts = Posts.find({wordId : w._id},{sort : votes, limit : 10});
      _.each(wordPosts,function(p){
             //create an alert
             });
        });
  Words.update({},{$inc : {status : 1}},{multi : true});
  newWord = Words.insert({word : word.word, postsCount : 0, status : 1});
  newWords.remove({_id : word._id});
  if(!newWord)  newWord = Words.insert({word : 'Error', postsCount : 0, status : 1});
  console.log("Replaced current word:",current.word," : with : ",newWord.word);
};  

var countDown = function() {
  t = new Date();
  var x1 = 390,x2 = 1120,x3=1120+390;
  h = t.getHours();
  m = t.getMinutes();
  y = h*60+m
  x = (y<=x1 ? x1 : (y<=x2 ? x2 : x3));
  xy =Math.floor((x-y)/60);
  xxx = xy.toString()+" : "+((x-y)-xy*60).toString();
    console.log(t,xxx);
  Words.update({status : 1},{$set : {countDown : xxx}});
};  
  
var cron = new Meteor.Cron( {
      events:{
        "30 6 * * *" : pulse,
        "40 18 * * *" : pulse,
        "* * * * *" : countDown
      }
    });