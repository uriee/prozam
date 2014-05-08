Template.wordPage.helpers({
  word : function() { return Words.findOne(this.wordId);},
});


