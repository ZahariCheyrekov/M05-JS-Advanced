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

       
        clearInputFields();
    }

    function clearInputFields() {
        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';
    }
}