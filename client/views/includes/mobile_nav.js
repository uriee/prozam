/*
Template.mobile_nav.events({
  'click .linknew': function(e) {
    e.preventDefault();
        console.log("uri");
    Router.go('/new');
  }
  
});
*/
Template.mobile_nav.events({
  'click linknew, click h2, click h3, click h4, click h5, click h6' : function (e, template) {
    console.log("clicked");
  }
});