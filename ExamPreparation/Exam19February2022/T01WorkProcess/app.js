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

    const tbody = document.getElementById('tbody');
    const totalBudget = document.getElementById('sum');

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

        const tr = document.createElement('tr');
        const firstNameText = document.createElement('td');
        firstNameText.textContent = firstName;

        const lastNameText = document.createElement('td');
        lastNameText.textContent = lastName;

        const emailText = document.createElement('td');
        emailText.textContent = email;

        const birthText = document.createElement('td');
        birthText.textContent = birth;

        const positionText = document.createElement('td');
        positionText.textContent = position;

        const salaryNum = document.createElement('td');
        salaryNum.textContent = salary;

        const trButtons = document.createElement('td');
        const firedButton = document.createElement('button');
        firedButton.textContent = 'Fired';
        firedButton.classList.add('fired');
        firedButton.addEventListener('click', () => {
            tbody.removeChild(tr);
            decreaseBudget();
        })

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('Edit');
        editButton.addEventListener('click', () => {
            firstNameField.value = firstName;
            lastNameField.value = lastName;
            emailField.value = email;
            birthField.value = birth;
            positionField.value = position;
            salaryField.value = salary;

            tbody.removeChild(tr);
            decreaseBudget();
        });

        trButtons.appendChild(firedButton);
        trButtons.appendChild(editButton);

        tr.appendChild(firstNameText);
        tr.appendChild(lastNameText);
        tr.appendChild(emailText);
        tr.appendChild(birthText);
        tr.appendChild(positionText);
        tr.appendChild(salaryNum);
        tr.appendChild(trButtons);

        tbody.appendChild(tr);

        let currentBudget = Number(totalBudget.textContent);
        currentBudget += Number(salary);
        totalBudget.textContent = currentBudget.toFixed(2);

        function decreaseBudget() {
            let currentBudget = Number(totalBudget.textContent);
            currentBudget -= Number(salary);
            totalBudget.textContent = currentBudget.toFixed(2);
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