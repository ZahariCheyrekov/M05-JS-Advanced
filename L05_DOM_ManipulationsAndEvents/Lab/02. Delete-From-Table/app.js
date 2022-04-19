function deleteByEmail() {
    const inputField = document.querySelector('input[name="email"]');

    const rows = Array.from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent == inputField.value.trim());

    rows.forEach(r => r.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';
    inputField.value = '';
}