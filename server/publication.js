Meteor.publish('posts', function() {
    return Posts.find({});
});
Meteor.publish('newPosts', function(limit) {
    return Posts.find({}, {
        sort: {
            submitted: -1
        },
        limit: limit
    });
});
Meteor.publish('topPosts', function(limit) {
    return Posts.find({}, {
        sort: {
            votes: -1,
            submitted: -1
        },
        limit: limit
    });
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