function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', addArticle);

   function addArticle(ev) {
      ev.preventDefault();

      clearInputFields();
   }

   function clearInputFields() {
      authorField.value = '';
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
   }
}