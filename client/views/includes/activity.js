Template.activity.helpers({
  current :  function() {
    w = Words.findOne({status : 1});
    Session.set('currentWord',w._id);
    return w.word;
  } , 
  countDown :  function() {
    return Words.findOne({status : 1}).countDown;
  }                       
});