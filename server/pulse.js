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

var cron = new Meteor.Cron( {
      events:{
        "9 8 * * *" : pulse
      }
    });