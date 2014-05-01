var pulse = function() {
  var current = Words.findOne({status : 1});
  var newWord = Words.findOne({status : 0});
  if (!newWord) {
    id = Words.insert({word : 'Run out of words', postsCount : 0, status : 0});
    this.newWord = {_id : id};
  }  
  Words.update({_id : current._id},{$set : {status : 3}});
  Words.update({_id : newWord._id},{$set : {status : 1}});
  console.log("Replaced current word:",current.word," : with : ",newWord.word);
}  

var countDown = function() {
  t = new Date();
  var x1 = 615,x2 = 1320,x3=132+615;
  h = t.getHours();
  m = t.getMinutes();
  y = h*60+m
  x = (y<=x1 ? x1 : (y<=x2 ? x2 : x3));
  xxx = x-(y).toString();
    console.log(t,xxx);
  Words.update({status : 1},{$set : {countDown : xxx}});
}  
  
var cron = new Meteor.Cron( {
      events:{
        "* * * * *" : countDown,
        "15 10 * * *" : pulse
      }
    });