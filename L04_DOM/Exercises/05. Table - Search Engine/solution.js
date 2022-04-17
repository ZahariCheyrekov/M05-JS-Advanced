function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      const resultText = document.getElementById('searchField').value.toLowerCase();

      rows.forEach((el) => {
         let textEl = el.textContent.toLowerCase();
         if (textEl.includes(resultText)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      });
   }
}