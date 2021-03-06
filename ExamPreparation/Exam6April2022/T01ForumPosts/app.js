window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById('post-title');
  const categoryField = document.getElementById('post-category');
  const contentField = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', getInformation);

  const ulEl = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearPosts);

  function getInformation() {
    const titleText = titleField.value;
    const categoryText = categoryField.value;
    const contentText = contentField.value;
    let elementToRemove = null;

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
    editBtn.addEventListener('click', () => {
      ulEl.removeChild(liItem);

      titleField.value = titleText;
      categoryField.value = categoryText;
      contentField.value = contentText;
    });

    const approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', (ev) => {
      elementToRemove = ev.target.parentElement;
      elementToRemove.removeChild(editBtn);
      elementToRemove.removeChild(approveBtn);

      ulEl.removeChild(elementToRemove);
      publishedList.appendChild(elementToRemove);
    });

    articleEl.appendChild(titlePost);
    articleEl.appendChild(categoryPost);
    articleEl.appendChild(contentPost);

    liItem.appendChild(articleEl);
    liItem.appendChild(approveBtn);
    liItem.appendChild(editBtn);

    ulEl.appendChild(liItem);

    clearInputFields();
  }

  function clearPosts() {
    while (publishedList.firstChild) {
      publishedList.removeChild(publishedList.firstChild);
    }
  }

  function clearInputFields() {
    titleField.value = '';
    categoryField.value = '';
    contentField.value = '';
  }
}
