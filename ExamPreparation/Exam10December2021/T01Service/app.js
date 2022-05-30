window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const sendBtn = document.querySelector('form button');
    sendBtn.addEventListener('click', sendOrder);

    const recievedOrdersSection = document.getElementById('received-orders');

    function sendOrder(ev) {
        ev.preventDefault();

        const productTypeContent = productType.value;
        const descriptionContent = description.value;
        const nameContent = name.value;
        const phoneContent = phone.value;

        if (!descriptionContent || !nameContent || !phoneContent) {
            return;
        }

        const container = document.createElement('div');
        container.classList.add('container');

        const productTypeRepair = document.createElement('h2');
        productTypeRepair.textContent = `Product type for repair: ${productTypeContent}`;

        const clientInformation = document.createElement('h3');
        clientInformation.textContent = `Client information: ${nameContent}, ${phoneContent}`;

        const descriptionEl = document.createElement('h4');
        descriptionEl.textContent = `Description of the problem: ${descriptionContent}`;

        const startRepairBtn = document.createElement('button');
        startRepairBtn.textContent = 'Start repair';
        startRepairBtn.classList.add('start-btn');
       

        const finishRepairBtn = document.createElement('button');
        finishRepairBtn.textContent = 'Finish repair';
        finishRepairBtn.disabled = true;
        finishRepairBtn.classList.add('finish-btn');

        container.appendChild(productTypeRepair);
        container.appendChild(clientInformation);
        container.appendChild(descriptionEl);
        container.appendChild(startRepairBtn);
        container.appendChild(finishRepairBtn);

        recievedOrdersSection.appendChild(container);

        clearInputFields();
    }

    function clearInputFields() {
        description.value = '';
        name.value = '';
        phone.value = '';
    }
}