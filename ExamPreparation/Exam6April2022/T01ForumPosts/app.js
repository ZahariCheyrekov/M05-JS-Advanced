window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById('post-title');
  const categoryField = document.getElementById('post-category');
  const contentField = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', getInformation);

  function getInformation() {
    if (!titleField.value || !categoryField.value || !contentField.value) {
      return;
    }

    const ulItem = document.createElement('ul');

    clearInputFields();
  }

  function clearInputFields() {
    titleField.value = '';
    categoryField.value = '';
    contentField.value = '';
  }
}