Meteor.subscribe('posts');
newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
topPostsHandle = Meteor.subscribeWithPagination('topPosts', 10);
Meteor.autorun(function() {
    Meteor.subscribe('comment');
    Meteor.subscribe('comments', Session.get('currentPostId'));
});
Meteor.subscribe('notifications');
Session.set('pageTitle', 'FindableNow');