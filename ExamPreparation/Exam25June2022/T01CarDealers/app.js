window.addEventListener("load", solve);

function solve() {
  const makeFieldInput = document.getElementById('make');
  const modelFieldInput = document.getElementById('model');
  const yearFieldInput = document.getElementById('year');
  const fuelTypeInputOption = document.querySelector('#fuel');
  const originalCostInputField = document.getElementById('original-cost');
  const sellingPriceInputField = document.getElementById('selling-price');

  const tbody = document.getElementById('table-body');

  const carListData = document.querySelector('#cars-list');

  const profitInfoData = document.querySelector('#profit');

  const publishBtnForm = document.getElementById('publish');
  publishBtnForm.addEventListener('click', getDataForm);

  function getDataForm(ev) {
    ev.preventDefault();

    const makeValue = makeFieldInput.value.trim();
    const modelValue = modelFieldInput.value.trim();
    const yearValue = yearFieldInput.value.trim();
    const fuelValue = fuelTypeInputOption.value.trim();
    const originalCstValue = originalCostInputField.value.trim();
    const sellingPrValue = sellingPriceInputField.value.trim();

    if (!makeValue || !modelValue || !yearValue || !fuelValue || !originalCstValue || !sellingPrValue) {
      return;
    }

    if (Number(originalCstValue) >= Number(sellingPrValue)) {
      return;
    }

  }
}