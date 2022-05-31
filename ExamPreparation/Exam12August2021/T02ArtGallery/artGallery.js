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
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        }

        const existingArticle = this.listOfArticles.find(a => a.articleName == articleName);
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
}