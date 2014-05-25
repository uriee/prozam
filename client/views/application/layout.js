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
        "placement": "right",
        "title": "Subject",
        "content": "Evry few Hours a Subject(word) is been declared all poem need to relate to that Subject"
      },
      {
        "target": "clock",
        "placement": "bottom",
        "title": "Get it on Time.",
        "content": "Time is runnung ot. Here you can see when the subject will change"
      },      
      {
        "target": "posts",
        "placement": "top",
        "title": "Poems",
        "content": "Here are the ecurrent new poems. browes and enjoy."
      }  ,  
      {
        "target": "account",
        "placement":  "bottom",
        "title": "For more fun, SignIn",
        "content": "By signin you can post you own poams and grade others"
      }      
    ]
  }
if(!Meteor.userId()) {
  hopscotch.startTour(tour);
}

};