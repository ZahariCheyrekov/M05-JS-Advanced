function sumTable() {
    let tds = Array.from(document.querySelectorAll('td'));
    let resultText = document.getElementById('sum');

    let total = 0;
    for (let i = 1; i < tds.length; i += 2) {
        total += Number(tds[i].textContent);
    }
    resultText.textContent = total;
}