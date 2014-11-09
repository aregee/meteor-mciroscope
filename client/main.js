Meteor.subscribe('posts');
Meteor.autorun(function() {
    Meteor.subscribe('comment');
    Meteor.subscribe('comments', Session.get('currentPostId'));
});
Meteor.subscribe('notifications');
Session.set('pageTitle', 'FindableNow');