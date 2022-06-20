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


    

   
  }




}
