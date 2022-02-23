function solve(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);

    date.setDate(date.getDate() - 1);

    const yearNewDate = date.getFullYear();
    const monthNewDate = date.getMonth() + 1;
    const dayNewDate = date.getDate();

    console.log(`${yearNewDate}-${monthNewDate}-${dayNewDate}`);
}

solve(2016, 9, 30);
solve(2016, 10, 1);