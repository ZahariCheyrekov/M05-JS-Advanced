window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const text = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const sendBtn = document.querySelector('form button');
    sendBtn.addEventListener('click', sendOrder);

    
}