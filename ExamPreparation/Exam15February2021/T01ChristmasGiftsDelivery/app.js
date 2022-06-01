function solution() {
    const inputField = document.querySelector('.card div input');
    const addGiftBtn = document.querySelector('.card div button');
    addGiftBtn.addEventListener('click', addGift);

    const uls = document.querySelectorAll('section.card ul');
    const listGifts = uls[0];
    const sentGifts = uls[1];
    const discartedGifts = uls[2];

    function addGift() {
        const inputValue = inputField.value;
        clearInputField();

        const li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = inputValue;

        const sendButton = document.createElement('button');
        sendButton.id = 'sendButton';
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', () => {
            li.removeChild(sendButton);
            li.removeChild(discardButton);
            sentGifts.appendChild(li);
        });

        const discardButton = document.createElement('button');
        discardButton.id = 'discardButton';
        discardButton.textContent = 'Discard';

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        const gifts = Array.from(listGifts.children);
        gifts.push(li);
        gifts.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        gifts.forEach(gift => listGifts.appendChild(gift));
    }

    function clearInputField() {
        inputField.value = '';
    }
}