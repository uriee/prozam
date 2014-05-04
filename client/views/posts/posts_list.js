Template.postsList.helpers({
  postsWithRank: function() {
    if(!this.posts) return '';
    this.posts.rewind();
    return this.posts.map(function(post, index, cursor) {
      post._rank = index;
      return post;
    });
  },
  

  posts : function(){
  
  Session.setDefault('itemsLimit', 5);
  console.log("xxx",Session.get('itemsLimit'));
    this.query = this.query || {};
    console.log(Session.get('itemsLimit'),this.sort,this.query);
    Meteor.subscribe('posts', {limit : Session.get('itemsLimit'),sort : this.sort});
    console.log(Posts.find(this.query,{sort : this.sort}).fetch());
    return Posts.find(this.query,{sort : this.sort});  
  }
});

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    var threshold, target = $('#load-more');
    if (!target.length) return;
     threshold = $(window).scrollTop() + $(window).height() - target.height();
 
    if (target.offset().top < threshold) {
        if (!target.data('visible')) {
             console.log('target became visible (inside viewable area)',Session.get('itemsLimit'));
            target.data('visible', true);
                      Session.set('itemsLimit',Session.get('itemsLimit') + 10);
        }
    } else {
        if (target.data('visible')) {
             console.log('target became invisible (below viewable arae)');
            target.data('visible', false);
        }
    }        
}
 
// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);