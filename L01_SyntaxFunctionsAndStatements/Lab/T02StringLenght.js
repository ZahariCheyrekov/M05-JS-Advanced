function stringLength(wordOne, wordTwo, wordThree) {
    const lengthOne = wordOne.length;
    const lengthTwo = wordTwo.length;
    const lengthThree = wordThree.length;

    const totalLength = lengthOne + lengthTwo + lengthThree;
    const averageLength = Math.floor(totalLength / 3);
    
    console.log(totalLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');