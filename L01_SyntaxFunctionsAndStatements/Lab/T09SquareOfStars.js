function displayStars(number) {
    if (number === null) {
        for (let i = 0; i < 5; i++);
        console.log('* '.repeat(5));

    } else {
        for (let i = 0; i < number; i++) {
            console.log('* '.repeat(number))
        }
    }
}

displayStars(5);
displayStars(1);
displayStars(10);