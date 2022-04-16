function editElement(currentText, match, replacer) {
    const text = currentText.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = text.replace(matcher, replacer);
    currentText.textContent = edited;
}