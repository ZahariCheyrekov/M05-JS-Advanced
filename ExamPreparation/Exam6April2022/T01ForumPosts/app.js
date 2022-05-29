window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById('post-title');
  const categoryField = document.getElementById('post-category');
  const contentField = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const ulEl = document.getElementById('review-list');
  publishBtn.addEventListener('click', getInformation);

  function getInformation() {
    const titleText = titleField.value;
    const categoryText = categoryField.value;
    const contentText = contentField.value;

    if (!titleText || !categoryText || !contentText) {
      return;
    }

    const liItem = document.createElement('li');
    liItem.classList.add('rpost');

    const articleEl = document.createElement('article');

    const titlePost = document.createElement('h4');
    titlePost.textContent = titleField.value;

    const categoryPost = document.createElement('p');
    categoryPost.textContent = `Category: ${categoryField.value}`;

    const contentPost = document.createElement('p');
    contentPost.textContent = `Content: ${contentField.value}`;

    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    const approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';

    articleEl.appendChild(titlePost);
    articleEl.appendChild(categoryPost);
    articleEl.appendChild(contentPost);

    liItem.appendChild(articleEl);
    liItem.appendChild(editBtn);
    liItem.appendChild(approveBtn);

    ulEl.appendChild(liItem);

    clearInputFields();
  }

  function clearInputFields() {
    titleField.value = '';
    categoryField.value = '';
    contentField.value = '';
  }
}