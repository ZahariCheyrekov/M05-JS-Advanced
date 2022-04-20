function getArticleGenerator(articles) {

    const output = document.getElementById('content');
    const next = articles.slice();

    return function showOnClick() {
        if (next[0] !== undefined) {
            const article = document.createElement('article');
            article.innerHTML = next.shift();
            output.appendChild(article);
        }

        return showOnClick;
    }
}