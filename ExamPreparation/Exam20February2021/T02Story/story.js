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

        return `${this.likes[0]} and ${this.likes.length-1} others like this story!`;
    }
}