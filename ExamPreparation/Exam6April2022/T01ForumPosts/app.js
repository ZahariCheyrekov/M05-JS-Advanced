window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById('post-title');
  const categoryField = document.getElementById('post-category');
  const contentField = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', getInformation);

  
  function getInformation() {
    const titleText = titleField.value;
    const categoryText = categoryField.value;
    const contentText = contentField.value;
    let elementToRemove = null;


    const liItem = document.createElement('li');
    liItem.classList.add('rpost');

    const articleEl = document.createElement('article');

    const titlePost = document.createElement('h4');
    titlePost.textContent = titleField.value;

    const categoryPost = document.createElement('p');
    categoryPost.textContent = `Category: ${categoryField.value}`;

    const contentPost = document.createElement('p');
    contentPost.textContent = `Content: ${contentField.value}`;

   
  }




}
