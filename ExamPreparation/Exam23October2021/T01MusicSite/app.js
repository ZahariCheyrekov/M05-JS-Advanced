window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    function addSong(ev) {
        ev.preventDefault();

        const genreContent = genreField.value;
        const nameContent = nameField.value;
        const authorContent = authorField.value;
        const dateContent = dateField.value;

        if (!genreContent || !nameContent || !authorContent || !dateContent) {
            return;
        }
    }
}