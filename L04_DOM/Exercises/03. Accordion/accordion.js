function toggle() {
    const button = document.querySelector('.button');
    const hiddenText = document.getElementById('extra');

    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    hiddenText.style.display = hiddenText.style.display == 'none'
        || hiddenText.style.display == ' '
        ? hiddenText.style.display = 'block'
        : hiddenText.style.display = 'none';
}