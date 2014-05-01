Template.activity.helpers({
  current :  function() {
    return Words.findOne({status : 1}).word
  }  
 // ,
 // graded : function() {
 //   return Words.findOne({status : 2}).word;
 // }                      
});