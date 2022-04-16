function solve() {
    const words = (document.getElementById('text').value).split(' ');
    const textCase = document.getElementById('naming-convention').value;

    const isValidCase = textCase == 'Camel Case' || textCase == 'Pascal Case';

    let result = '';

    if (isValidCase) {
        for (let word = 0; word < words.length; word++) {
            result += words[word][0].toUpperCase() + words[word]
                .slice(1, words[word].length).toLowerCase();
        }
    } else {
        result = 'Error!';
    }

    if (textCase == 'Camel Case') {
        result = result.charAt(0).toLowerCase() + result.slice(1, result.length);
    }

    document.getElementById('result').textContent = result;
}