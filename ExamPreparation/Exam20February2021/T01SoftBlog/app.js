function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', addArticle);

   const articlesSection = document.querySelector('.site-content main section');
   const archive = document.querySelector('.archive-section ol');

   function addArticle(ev) {
      ev.preventDefault();

      const article = document.createElement('article');
      const title = document.createElement('h1');
      title.textContent = titleField.value;

      const category = document.createElement('p');
      category.textContent = 'Category:';

      const categoryType = document.createElement('strong');
      categoryType.textContent = categoryField.value;

      const creator = document.createElement('p');
      creator.textContent = 'Creator:';

      const creatorName = document.createElement('strong');
      creatorName.textContent = authorField.value;

      const content = document.createElement('p');
      content.textContent = contentField.value;

      const divBtns = document.createElement('div');
      divBtns.classList.add('buttons');

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';

      const archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      

      article.appendChild(title);
      category.appendChild(categoryType);
      article.appendChild(category);
      creator.appendChild(creatorName);
      article.appendChild(creator);
      article.appendChild(content);
      divBtns.appendChild(deleteBtn);
      divBtns.appendChild(archiveBtn);
      article.appendChild(divBtns);

      articlesSection.appendChild(article);

      clearInputFields();
   }

   function clearInputFields() {
      authorField.value = '';
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
   }
}