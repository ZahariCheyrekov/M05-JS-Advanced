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
  
}