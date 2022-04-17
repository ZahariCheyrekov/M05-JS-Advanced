function search() {
   const listItems = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;

   let resultsFound = 0; 

   listItems.forEach((el) => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = '';
      document.getElementById('result').textContent = '';
   });
 
   if (text.trim() == '') {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = '';
   } else {
      listItems.forEach((el) => {

         if (el.innerHTML.includes(text)) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
            resultsFound++;
         } else {
            el.style.fontWeight = 'normal';
            el.style.textDecoration = '';
         }
      });
   }

   document.getElementById('result').textContent = `${resultsFound} matches found`;
}
