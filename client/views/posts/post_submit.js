Template.postSubmit.events({
  
	'change #fileInput': function (event) {
		FS.Utility.eachFile(event, function(file) {
			a = Images.insert(file);
      //link = '../prozam-files/images/images-'+a._id+"-"+a.name();
      $('#poem').val("");
      $('#imageId').val(a._id);
		});
    console.log($("form"));
		$("form").submit();
	},

  'submit form': function(e) {
    console.log($('#fileInput').files,$('input[type=file]')[0].files,$('#fileInput')[0].files);
    e.preventDefault();
    
    var post = {
      imageId: $(e.target).find('[id=imageId]').val(),
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

