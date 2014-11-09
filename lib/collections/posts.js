Posts = new Mongo.Collection('posts');
Posts.allow({
    update: function(userId, post) {
        return ownsDocument(userId, post);
    },
    remove: function(userId, post) {
        return ownsDocument(userId, post);
    },
});
Posts.deny({
    update: function(userId, post, fieldNames) {
        // may only edit the following two fields:
        return (_.without(fieldNames, 'url', 'title', 'content').length > 0);
    }
});
Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String,
            content: String
        });

        var postWithSameLink = Posts.findOne({
            url: postAttributes.url
        });
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.profile.name,
            submitted: new Date().getTime(),
            commentsCount: 0,
            upvoters: [],
            votes: 0
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    },
    upvote: function(postId) {
        var user = Meteor.user();
        console.log(user);
        // ensure the user is logged in if (!user)
        if(!user)
            throw new Meteor.Error(401, "You need to login to upvote");
        var post = Posts.findOne(postId);
        if (!post)
            throw new Meteor.Error(422, 'Post not found');
        if (_.include(post.upvoters, user._id))
            throw new Meteor.Error(422, 'Already upvoted this post');
        Posts.update(post._id, {
            $addToSet: {
                upvoters: user._id
            },
            $inc: {
                votes: 1
            }
        });
    }

});