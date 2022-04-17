function solve() {
  const sentences = document.getElementById('input')
    .value.split('.')
    .filter(sentence => sentence.length > 0);
  const output = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
    let arr = [];

    for (let l = 0; l < 3; l++) {
      if (sentences[i + l]) {
        arr.push(sentences[i + l]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}