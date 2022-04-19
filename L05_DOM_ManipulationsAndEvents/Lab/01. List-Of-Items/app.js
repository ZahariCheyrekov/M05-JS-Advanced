function addItem() {
    const inputText = document.getElementById('newItemText');
    const newLiItem = document.createElement('li');
    newLiItem.textContent = inputText.value;

    document.getElementById('items').appendChild(newLiItem);
    inputText.value= '';
}