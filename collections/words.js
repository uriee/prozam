Words = new Meteor.Collection('words');
newWords = new Meteor.Collection('Words');

Words.allow({
  insert: false,
  remove: false
});

newWords.allow({
  insert : false,
  update: false,
  remove: false
});