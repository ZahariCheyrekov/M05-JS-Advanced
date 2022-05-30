window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const text = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const sendBtn = document.querySelector('form button');
    sendBtn.addEventListener('click', sendOrder);

    function sendOrder(ev) {
        ev.preventDefault();

        const productTypeContent = productType.value;
        const descriptionContent = description.value;
        const textContent = text.value;
        const phoneContent = phone.value;

        if (!descriptionContent || !textContent || !phoneContent) {
            return;
        }

        clearInputFields();
    }

    function clearInputFields() {
        description.value = '';
        text.value = '';
        phone.value = '';
    }
}