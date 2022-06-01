function solve() {
    const taskField = document.getElementById('task');
    const descriptioField = document.getElementById('description');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);
    const openDiv = document.querySelectorAll('.wrapper section')[1].children;
    const open = openDiv[0];
    const inProgress = document.querySelectorAll('.wrapper section')[2].children;
    const inProgressEl = inProgress[1];

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

        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', (ev) => {
            ev.target.parentElement.parentElement.parentElement.removeChild(article);

            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';

            divBtns.removeChild(startBtn);
            divBtns.appendChild(finishBtn);
            article.appendChild(divBtns);

            inProgressEl.appendChild(article);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentElement.parentElement.parentElement.removeChild(article);
        });

        article.appendChild(header);
        article.appendChild(descriptionContent);
        article.appendChild(dateContent);
        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);
        article.appendChild(divBtns);

        open.appendChild(article);
    }

    function clearInputFields() {
        taskField.value = '';
        descriptioField.value = '';
        dateField.value = '';
    }
}