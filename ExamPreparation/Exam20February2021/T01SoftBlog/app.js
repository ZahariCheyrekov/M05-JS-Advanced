function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', addArticle);

   const articlesSection = document.querySelector('.site-content main section');
   const archive = document.querySelector('.archive-section ol');

   let archivedLiEl = [];

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
      deleteBtn.addEventListener('click', (ev) => {
         ev.target.parentElement.parentElement.parentElement.removeChild(article);
         document.querySelector('.site-content').removeChild(document.querySelector('.site-content aside'));
      });

      const archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', (ev) => {
         archivedLiEl.push(title.textContent);
         archivedLiEl.sort((a, b) => a.localeCompare(b));

         const childs = Array.from(archive.childNodes);
         for (const child of childs) {
            archive.removeChild(child);
         }

         for (const el of archivedLiEl) {
            const liEl = document.createElement('li');
            liEl.textContent = el;
            archive.appendChild(liEl);
         }

         ev.target.parentElement.parentElement.parentElement.removeChild(article);
      });

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