Template.activity.helpers({
  current :  function() {
    return Words.findOne({status : 1}).word
  } , 
  countDown :  function() {
    return Words.findOne({status : 1}).countDown
  }                       
});