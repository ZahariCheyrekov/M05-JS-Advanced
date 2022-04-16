function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);
    const result = firstNum - secondNumber;

    document.getElementById('result').textContent = result;
}