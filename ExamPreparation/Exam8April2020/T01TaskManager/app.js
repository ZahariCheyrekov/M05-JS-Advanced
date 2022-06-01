function solve() {
    const taskField = document.createElement('task');
    const descriptioField = document.createElement('description');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();

        const task = taskField.value;
        const description = descriptioField.value;
        const date = dateField.value;

        if (!task || !description || !date) {
            return;
        }

        
    }
}