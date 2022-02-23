function solve(speed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let withinTheLimit = false;

    let speedLimitZone = 0;

    switch (area) {
        case 'motorway':
            withinTheLimit = speed <= motorwayLimit;
            speedLimitZone = motorwayLimit;
            break;

        case 'interstate':
            withinTheLimit = speed <= interstateLimit;
            speedLimitZone = interstateLimit;
            break;

        case 'city':
            withinTheLimit = speed <= cityLimit;
            speedLimitZone = cityLimit;
            break;

        case 'residential':
            withinTheLimit = speed <= residentialLimit;
            speedLimitZone = residentialLimit;
            break;
    }

    if (withinTheLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimitZone} zone`);

    } else {
        let difference = speed - speedLimitZone;
        let status = '';

        if (difference <= 20) {
            status = 'speeding';

        } else if (difference <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitZone} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');