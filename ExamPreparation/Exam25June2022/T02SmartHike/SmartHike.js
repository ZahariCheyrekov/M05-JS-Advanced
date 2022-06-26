class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        let alreadyExistingName = false;

        for (const key of Object.keys(this.goals)) {
            if (key == peak) {
                alreadyExistingName = true;
                break;
            }
        }

        if (alreadyExistingName) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        let existingName = false;

        for (const key of Object.keys(this.goals)) {
            if (key == peak) {
                existingName = true;
                break;
            }
        }

        if (!existingName) {
            throw new Error(`${peak} is not in your current goals`);
        }

        const diffBetweenResourcesCurrent = (this.resources - time) * 10;
        if (diffBetweenResourcesCurrent < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        this.resources -= time * 10;
        if (this.resources <= 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

   

    
}

