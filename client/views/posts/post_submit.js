Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      poem: $(e.target).find('[name=poem]').val(),
      title: $(e.target).find('[name=title]').val()
    }
    
    Meteor.call('post', post, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        if (error.error === 302)
          Router.go('postPage', {_id: error.details})
      } else {
        Router.go('postPage', {_id: id});
      }
    });
  }
});

