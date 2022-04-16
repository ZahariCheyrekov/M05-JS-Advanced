function calc() {
    let firstNum = Number(document.getElementById('num1').value);
    let secondNum = Number(document.getElementById('num2').value);
    let sum = firstNum + secondNum;

    if (Number.isNaN(sum)) {
        document.getElementById('sum').value = 'Please enter two numbers!';
    } else {
        document.getElementById('sum').value = sum;
    }
}