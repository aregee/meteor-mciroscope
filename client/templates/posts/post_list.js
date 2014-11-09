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