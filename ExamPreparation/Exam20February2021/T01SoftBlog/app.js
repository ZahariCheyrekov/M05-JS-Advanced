function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const contentField = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', addArticle);

   function addArticle(ev) {
      ev.preventDefault();

      
   }
}