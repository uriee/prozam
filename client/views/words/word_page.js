Template.wordPage.helpers({
  posts: function() {
    return Posts.find({wordId: this._id});
  }
});