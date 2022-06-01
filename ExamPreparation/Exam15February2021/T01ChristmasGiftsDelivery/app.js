function solution() {
    const inputField = document.querySelector('.card div input');
    const addGiftBtn = document.querySelector('.card div button');
    addGiftBtn.addEventListener('click', addGift);

    const uls = document.querySelectorAll('section.card ul');
    const listGifts = sections[0];
    const sentGifts = sections[1];
    const discartedGifts = sections[2];

    function addGift() {


        clearInputField();
    }

    function clearInputField() {
        inputField.value = '';
    }
}