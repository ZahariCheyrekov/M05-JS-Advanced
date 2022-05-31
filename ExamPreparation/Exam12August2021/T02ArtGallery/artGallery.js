class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        const articleByModel = findArticleByModel(articleModel);

        if (!articleByModel) {
            throw new Error('This article model is not included in this gallery!');
        }

        const existingArticle = findArticleByName(articleName);
        if (!existingArticle) {
            let model = articleModel.toLowerCase();

            let article = {
                model,
                articleName,
                quantity
            }

            this.listOfArticles.push(article);

        } else {
            existingArticle.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    findArticleByName(name) {
        return this.listOfArticles.find(a => a.articleName == name);
    }

    findArticleByModel(model) {
        return this.possibleArticles[model.toLowerCase()];
    }

    findGuestByName(name) {
        return this.guests.find(g => g.guestName == name);
    }
}