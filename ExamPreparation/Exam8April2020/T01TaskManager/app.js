function solve() {
    const taskField = document.getElementById('task');
    const descriptioField = document.getElementById('description');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);
    const [inputSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    function addTask(ev) {
        ev.preventDefault();

        const task = taskField.value;
        const description = descriptioField.value;
        const date = dateField.value;

        if (!task || !description || !date) {
            return;
        }

        clearInputFields();

        const article = document.createElement('article');
        const header = document.createElement('h3');
        header.textContent = `${task}`;

        const descriptionContent = document.createElement('p');
        descriptionContent.textContent = `Description: ${description}`;

        const dateContent = document.createElement('p');
        dateContent.textContent = `Due Date: ${date}`;

        const divBtn = document.createElement('div');
        divBtn.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArticle);

        divBtn.appendChild(startBtn);
        divBtn.appendChild(deleteBtn);
        article.appendChild(header);
        article.appendChild(descriptionContent);
        article.appendChild(dateContent);
        article.appendChild(divBtn);

        openSection.lastElementChild.appendChild(article);

        function deleteArticle() {
            article.remove();
        }

        function finishArticle() {
            divBtn.remove();
            completeSection.lastElementChild.appendChild(article);
        }

        function startArticle() {
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishArticle);
            divBtn.appendChild(finishBtn);
            progressSection.lastElementChild.appendChild(article);
        }
    }

    function clearInputFields() {
        taskField.value = '';
        descriptioField.value = '';
        dateField.value = '';
    }
}