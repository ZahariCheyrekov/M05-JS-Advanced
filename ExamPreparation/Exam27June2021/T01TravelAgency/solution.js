window.addEventListener('load', solution);

function solution() {
  const fullNameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const numberField = document.getElementById('phone');
  const adressField = document.getElementById('address');
  const codeField = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitReservation);

  const ulList = document.getElementById('infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  function submitReservation() {
    const nameContent = fullNameField.value;
    const emailContent = emailField.value;
    const phoneContent = numberField.value;
    const addressContent = adressField.value;
    const codeContent = codeField.value;

    if (!nameContent || !emailContent) {
      return;
    }

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    const nameEl = document.createElement('li');
    nameEl.textContent = `Full Name: ${nameContent}`;

    const emailEl = document.createElement('li');
    emailEl.textContent = `Email: ${emailContent}`;

    const phoneEl = document.createElement('li');
    phoneEl.textContent = `Phone Number: ${phoneContent}`;

    const addressEl = document.createElement('li');
    addressEl.textContent = `Adress: ${addressContent}`;

    const codeEl = document.createElement('li');
    codeEl.textContent = `Postal Code: ${codeContent}`;


    ulList.appendChild(nameEl);
    ulList.appendChild(emailEl);
    ulList.appendChild(phoneEl);
    ulList.appendChild(addressEl);
    ulList.appendChild(codeEl);
    
    clearInputFields();
  }

  function clearInputFields() {
    fullNameField.value = '';
    emailField.value = '';
    numberField.value = '';
    adressField.value = '';
    codeField.value = '';
  }
}