Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentPostId = this._id;
    
    var postProperties = {
      poem: $(e.target).find('[name=poem]').val(),
      title: $(e.target).find('[name=title]').val()
    }
    
    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },
  
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this post?")) {
         Meteor.call('delete', this._id, function(error, id) {
            if (error) {
              // display the error to the user
              throwError(error.reason);
            } 
         Router.go('home');
        });
    }
  }
  
});