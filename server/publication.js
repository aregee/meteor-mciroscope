Meteor.publish('posts', function() {
    return Posts.find({});
});

Meteor.publish('notifications', function() {
    return Notifications.find({
        userId: this.userId
    });
});
Meteor.publish('comment', function() {
    return Comments.find({});
});
Meteor.publish('comments', function(postId) {
    return Comments.find({
        postId: postId
    });
});