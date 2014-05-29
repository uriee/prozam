Template.layout.rendered = function(){
  tour = {
    "id": "prozam",
    "steps": [
      {
        "target": "prozam",
        "placement":  "bottom",
        "title": "Welcome to Prozam",
        "content": "Prozam is A social site to exchange your prozaic creativity."
      },
      {
        "target": "word",
        "placement": "bottom",
        "title": "Subject",
        "content": "Every few Hours a Word is being declared all poem need to relate to that Word"
      },
      {
        "target": "clock",
        "placement": "left",
        "title": "Get it on Time.",
        "content": "Time is running out. Here you can see when the subject will change. At every given time you can vote for the last 3 Words."
      },      
      {
        "target": "posts",
        "placement": "top",
        "title": "Poems",
        "content": "Here are the new poems. browes and enjoy. You can also browes the Best poams, poams by past words and your own Mega Creative poams."
      }  ,  
      {
        "target": "account",
        "placement":  "left",
        "title": "For more fun, SignIn",
        "content": "By signin you can post your own poams and grade others. Have Fun"
      },     
      {
        "target": "miniAccount",
        "placement":  "left",
        "title": "For more fun, SignIn",
        "content": "By signin you can post your own poams and grade others. Have Fun"
      }       
    ]
  }
if(!Meteor.userId()) {
  hopscotch.startTour(tour);
}
 $.slidebars();
};