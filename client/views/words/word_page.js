Template.wordPage.helpers({
  posts: function() {
    return Posts.find({});
  }
});