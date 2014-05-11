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
    if (this.my) this.query.userId = Meteor.userId();
    if (this.limit) {
      setLimit(this.limit,0);
      this.limit=null;
    }
    this.query = this.query || {};
    Meteor.subscribe('posts', this.query, {limit : getLimit(),sort : this.sort});
    return Posts.find({},{sort : this.sort});  
  }  
  
});
/*---------------------------*/
var limit = 5;
var limitDep = new Deps.Dependency;
var getLimit = function () {
  limitDep.depend()
  return limit;
};
var setLimit = function (val,inc) {
  if (val) limit = val;
  else limit =limit + inc;
  limitDep.changed();
}

// whenever #load-more becomes visible, retrieve more results
function showMoreVisible() {
    var threshold, target = $('#load-more');
    if (!target.length) return;
     threshold = $(window).scrollTop() + $(window).height() - target.height();
 
    if (target.offset().top < threshold) {
        if (!target.data('visible')) {
             //console.log('target became visible (inside viewable area)',getLimit());
            target.data('visible', true);
                     // Session.set('itemsLimit',Session.get('itemsLimit') + 10);
                        setLimit(0,5);
        }
    } else {
        if (target.data('visible')) {
             //console.log('target became invisible (below viewable arae)');
            target.data('visible', false);
        }
    }        
}
 
/*----------------------------*/

$(window).scroll(showMoreVisible);
