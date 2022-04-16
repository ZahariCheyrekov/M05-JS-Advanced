function extractText() {
    let items = document.querySelectorAll("ul#items li");
    let resultText = document.getElementById('result');

    let textConcat = [];
    for (const current of items) {
        textConcat.push(current.textContent);
    }

    resultText.textContent = textConcat.join('\n');
    console.log(textConcat);
}