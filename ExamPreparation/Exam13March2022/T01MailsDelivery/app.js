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
    }

    function resetFieldValues() {
        recipentField.value = '';
        titleField.value = '';
        messageField.value = '';
    }
}

solve();