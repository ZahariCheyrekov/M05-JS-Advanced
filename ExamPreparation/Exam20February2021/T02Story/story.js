class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    get likes() {
        if (this.likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this.likes == 1) {
            return `${this.likes[0]} likes this story!`
        }

        return `${this.likes[0]} and ${this.likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this.likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }

        if (username == this.creator) {
            throw new Error('You can\'t like your own story!');
        }

        this.like.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this.likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }

        this.likes.filter(user => user !== username);
        return `${this.username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const comment = {
            id,
            username,
            content,
            replies: [],
        };

        const commentWithId = this.comments.find(c => c.id == id);

        if (commentWithId) {
            const replyID = Number(commentWithId.id + '.' + (commentWithId.replies.length + 1));
            const reply = {
                idd: replyID,
                username,
                content,
            };

            commentWithId.replies.push(reply);
            return 'You replied successfully';
        }

        comment.id = this.comments.length + 1;
        this.comments.push(comment);
        return `${username} commented on ${this.title}`;
    }
}