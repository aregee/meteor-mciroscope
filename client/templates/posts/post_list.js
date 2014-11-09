Template.newPosts.helpers({
    options: function() {
        return {
            sort: {
                submitted: -1
            },
            handle: newPostsHandle
        }
    }
});
Template.bestPosts.helpers({
    options: function() {
        return {
            sort: {
                votes: -1,
                submitted: -1
            },
            handle: topPostsHandle
        }
    }
});
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {
            sort: {
            	votes: -1,
                submitted: -1
            }
        });
    },
    postsReady: function() {
        return Posts.find({});
    },
    allPostsLoaded: function() {
        return Posts.find({});
    }
});
Template.postsList.events({
    'click .load-more': function(event) {
        event.preventDefault();
        this.handle.loadNextPage();
    }
});

/*Template.postsList.helpers({

});*/