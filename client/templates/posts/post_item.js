Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    commentsCount: function() {
        return Comments.find({
            postId: this._id
        }).count();
    },
    upvotedClass: function() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-default upvoteable';
        } else {
            return 'disabled';
        }
    }
});
Template.postItem.events({
    'click .upvoteable': function(event) {
        event.preventDefault();
        Meteor.call('upvote', this._id);
    }
});
Template.postItemDetail.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    commentsCount: function() {
        return Comments.find({
            postId: this._id
        }).count();
    },
    upvotedClass: function() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvoteable';
        } else {
            return 'disabled';
        }
    }
});
Template.postItemDetail.events({
    'click .upvote': function(event) {
        event.preventDefault();
        Meteor.call('upvote', this._id);
    }
});