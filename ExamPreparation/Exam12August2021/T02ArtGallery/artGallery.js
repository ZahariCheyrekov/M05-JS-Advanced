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
        const articleByModel = this.findArticleByModel(articleModel);

        if (!articleByModel) {
            throw new Error('This article model is not included in this gallery!');
        }

        const existingArticle = this.findArticleByName(articleName);
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

    inviteGuest(guestName, personality) {
        const existingGuest = this.findGuestByName(guestName);

        if (existingGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        const guest = {
            guestName,
            points: this.getPointsPerPersonality(personality),
            purchaseArticle: 0,
        };

        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const article = this.findArticleByName(articleName);
        if (!article || article.model != articleModel) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.findGuestByName(guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }

        const neededPoints = this.possibleArticles[articleModel];
        if (guest.points >= neededPoints) {
            guest.points -= neededPoints;
            article.quantity--;
            guest.purchaseArticle++;

        } else {
            return 'You need to more points to purchase the article.';
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        let info = [];

        if (criteria == 'article') {
            info.push('Articles information:');
            this.listOfArticles.forEach(a => info.push(`${a.model} - ${a.articleName} - ${a.quantity}`));

        } else if (criteria == 'guest') {
            info.push('Guests information:');
            this.guests.forEach(g => info.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return info.join('\n');
    }

    getPointsPerPersonality(personality) {
        const values = {
            Vip: 500,
            Middle: 250,
        };

        return values[personality] ? values[personality] : 50;
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

const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');

console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));