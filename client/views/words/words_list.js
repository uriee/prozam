Template.wordsList.helpers({
  pastWords : function(){

    if (this.limit) {
      setLimit(this.limit,0);
      this.limit=null;
    }
    Meteor.subscribe('words',{status : {$gt : 3}},{limit : getLimit(),sort : this.sort});
    return Words.find({status : {$gt : 3}, postsCount : {$gt : 0}},{sort : this.sort});  
  },

  liveWords :  function(){
  	Meteor.subscribe('words',{status : {$lt : 4}});
  	return Words.find({status : {$lt : 4}},{sort : {status : 1}});   
  }
  
});
/*---------------------------*/

var limit = 5;

