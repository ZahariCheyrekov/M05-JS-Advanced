window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const addButton = document.getElementById('add');
    const elementsTree = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('.total-price');

    addButton.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();

        const year = Number(yearField.value);
        const price = Number(priceField.value);

        if (year <= 0 || price <= 0) {
            return;
        }

        if (!modelField.value || !yearField.value
            || !descriptionField.value || !priceField.value) {
            return;
        }

        const productTr = document.createElement('tr');
        productTr.classList.add('info');

        const modelName = document.createElement('td');
        modelName.textContent = modelField.value;

        const modelPrice = document.createElement('td');
        modelPrice.textContent = Number(priceField.value).toFixed(2);

        productTr.appendChild(modelName);
        productTr.appendChild(modelPrice);

        const moreBtn = document.createElement('button');
        moreBtn.textContent = 'More Info';
        moreBtn.classList.add('moreBtn');

        const productInfo = document.createElement('tr');
        productInfo.classList.add('hide');
        const productYear = document.createElement('td');
        const productDescription = document.createElement('td');

        moreBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                productInfo.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                productInfo.style.display = 'none';
                e.currentTarget.textContent = 'More Info'
            }
        });

        productYear.textContent = `Year: ${yearField.value}`;
        productDescription.setAttribute('colspan', 3);
        productDescription.textContent = `Description: ${descriptionField.value}`;

        productInfo.appendChild(productYear);
        productInfo.appendChild(productDescription);

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy it';
        buyBtn.classList.add('buyBtn');

       

        const buttons = document.createElement('td');
        buttons.appendChild(moreBtn);
        buttons.appendChild(buyBtn);
        productTr.appendChild(buttons);

        elementsTree.appendChild(productTr);
        elementsTree.appendChild(productInfo);

        clearInputFields();
    }

    function clearInputFields() {
        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';
    }
}