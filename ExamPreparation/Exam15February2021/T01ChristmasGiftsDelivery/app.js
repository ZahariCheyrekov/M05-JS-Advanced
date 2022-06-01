function solution() {
    const inputField = document.querySelector('.card div input');
    const addGiftBtn = document.querySelector('.card div button');
    addGiftBtn.addEventListener('click', addGift);

    function addGift() {

        clearInputField();
    }

    function clearInputField() {
        inputField.value = '';
    }
}