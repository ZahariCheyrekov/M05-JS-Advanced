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

    const trDOM = createComponentDOM('tr', '', 'row');

    const makeTD = createComponentDOM('td', `${makeValue}`, '');
    const modelTD = createComponentDOM('td', `${modelValue}`, '');
    const yearTD = createComponentDOM('td', `${yearValue}`, '');
    const fuelTD = createComponentDOM('td', `${fuelValue}`, '');
    const orgCstTD = createComponentDOM('td', `${originalCstValue}`, '');
    const sellPriceTD = createComponentDOM('td', `${sellingPrValue}`, '');

    const btnsTD = createComponentDOM('td', '', '');

    const editBTN = createComponentDOM('button', 'Edit', 'action-btn edit');
    editBTN.addEventListener('click', () => {
      trDOM.remove()

      makeFieldInput.value = makeValue;
      modelFieldInput.value = modelValue;
      yearFieldInput.value = yearValue;
      fuelTypeInputOption.value = fuelValue;
      originalCostInputField.value = originalCstValue;
      sellingPriceInputField.value = sellingPrValue;
    });

    const sellBTN = createComponentDOM('button', 'Sell', 'action-btn sell');
    sellBTN.addEventListener('click', () => {
      trDOM.remove();

      const liElCar = createComponentDOM('li', '', 'each-list');
      const spanCarData = createComponentDOM('span', `${makeValue} ${modelValue}`, '');
      const spanYearData = createComponentDOM('span', `${yearValue}`, '');
      const diffPriceNew = Number(sellingPrValue);
      const diffPriceOld = Number(originalCstValue);
      const finalRes = Number(diffPriceNew - diffPriceOld);
      const spanPriceDiffCarData = createComponentDOM('span', `${finalRes}`, '');

      liElCar.appendChild(spanCarData);
      liElCar.appendChild(spanYearData);
      liElCar.appendChild(spanPriceDiffCarData);

      carListData.appendChild(liElCar);

      const currentProfitDataNum = Number(profitInfoData.textContent);
      profitInfoData.textContent = Number(currentProfitDataNum + finalRes).toFixed(2);
    });

    btnsTD.appendChild(editBTN);
    btnsTD.appendChild(sellBTN);

    trDOM.appendChild(makeTD);
    trDOM.appendChild(modelTD);
    trDOM.appendChild(yearTD);
    trDOM.appendChild(fuelTD);
    trDOM.appendChild(orgCstTD);
    trDOM.appendChild(sellPriceTD);
    trDOM.appendChild(btnsTD);

    tbody.appendChild(trDOM);

    clearAllInputsForm();
  }

  function createComponentDOM(typeEl, contentText, classInfoName) {
    const newEl = document.createElement(typeEl);

    if (contentText) {
      newEl.textContent = contentText;
    }

    if (classInfoName) {
      newEl.className = classInfoName;
    }

    return newEl;
  }

}