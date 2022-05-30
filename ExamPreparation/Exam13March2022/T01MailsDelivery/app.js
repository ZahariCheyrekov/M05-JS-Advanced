function solve() {
    const recipentField = document.getElementById('recipientName');
    const titleField = document.getElementById('title');
    const messageField = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    const listOfMails = document.getElementById('list');
    const sendMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list');

    addBtn.type = 'button';
    resetBtn.type = 'button';

    addBtn.addEventListener('click', deliverMail);
    resetBtn.addEventListener('click', resetFieldValues);

    function deliverMail() {
        const recipentContent = recipentField.value;
        const titleContent = titleField.value;
        const messageContent = messageField.value;
        let elementToRemove = null;

        if (!recipentContent || !titleContent || !messageContent) {
            return;
        }

        const liEl = document.createElement('li');
        const titleEl = document.createElement('h4');
        titleEl.textContent = `Title: ${titleContent}`;

        const recipentName = document.createElement('h4');
        recipentName.textContent = `Recipient Name: ${recipentContent}`;

        const messageEl = document.createElement('span');
        messageEl.textContent = messageContent;

        const divEl = document.createElement('div');
        divEl.id = 'list-action';

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.id = 'send';
        submitBtn.textContent = 'Send';
    }

    function resetFieldValues() {
        recipentField.value = '';
        titleField.value = '';
        messageField.value = '';
    }
}

solve();