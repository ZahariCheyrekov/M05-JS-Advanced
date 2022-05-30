function solve() {
    const firstNameField = document.getElementById('fname');
    const lastNameField = document.getElementById('lname');
    const emailField = document.getElementById('email');
    const birthField = document.getElementById('birth');
    const positionField = document.getElementById('position');
    const salaryField = document.getElementById('salary');
    const hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.type = 'button';
    hireWorkerBtn.addEventListener('click', hireWorker);

    function hireWorker() {
        const firstName = firstNameField.value
        const lastName = lastNameField.value;
        const email = emailField.value;
        const birth = birthField.value;
        const position = positionField.value;
        const salary = salaryField.value;

        if (!firstName || !lastName || !email || !birth || !position || !salary) {
            return;
        }

        clearInputFields();
    }

    function clearInputFields() {
        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        birthField.value = '';
        positionField.value = '';
        salaryField.value = '';
    }
}

solve();