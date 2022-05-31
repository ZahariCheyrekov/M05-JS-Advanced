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