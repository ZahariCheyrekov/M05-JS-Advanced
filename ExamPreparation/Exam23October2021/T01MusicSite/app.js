window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    const allHitsSection = document.querySelector('.all-hits-container');
    const totalLikes = document.querySelector('div.likes p');

    function addSong(ev) {
        ev.preventDefault();

        const genreContent = genreField.value;
        const nameContent = nameField.value;
        const authorContent = authorField.value;
        const dateContent = dateField.value;

        if (!genreContent || !nameContent || !authorContent || !dateContent) {
            return;
        }

        clearInputFields();

        const divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        const imgSong = document.createElement('img');
        imgSong.src = './static/img/img.png';

        const genreSong = document.createElement('h2');
        genreSong.textContent = `Genre: ${genreContent}`;

        const nameSong = document.createElement('h2');
        nameSong.textContent = `Name: ${nameContent}`;

        const authorSong = document.createElement('h2');
        authorSong.textContent = `Author: ${authorContent}`;

        const dateSong = document.createElement('h3');
        dateSong.textContent = `Date: ${dateContent}`;

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';

        const likeSong = document.createElement('button');
        likeSong.classList.add('like-btn');
        likeSong.textContent = 'Like song';
        likeSong.addEventListener('click', () => {
            likeSong.disabled = true;
            let currentLikes = Number(totalLikes.textContent.replace(/Total Likes: /g, ''));
            totalLikes.textContent = `Total Likes: ${Number(currentLikes + 1)}`;
        });

        const deleteSong = document.createElement('button');
        deleteSong.classList.add('delete-btn');
        deleteSong.textContent = 'Delete';

        divHitsInfo.appendChild(imgSong);
        divHitsInfo.appendChild(genreSong);
        divHitsInfo.appendChild(nameSong);
        divHitsInfo.appendChild(authorSong);
        divHitsInfo.appendChild(dateSong);
        divHitsInfo.appendChild(saveBtn);
        divHitsInfo.appendChild(likeSong);
        divHitsInfo.appendChild(deleteSong);

        allHitsSection.appendChild(divHitsInfo);
    }

    function clearInputFields() {
        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }
}