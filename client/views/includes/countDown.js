Template.activity.helpers({
  countDown :  function() {
    return Words.findOne({status : 1}).countDown
  }  
                    
});