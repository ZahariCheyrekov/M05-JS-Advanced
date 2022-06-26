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

    rest(time) {
        this.resources += time * 10;

        if (this.resources > 100) {
            this.resources = 100;

            return 'Your resources are fully recharged. Time for hiking!';
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'hard' || criteria === 'easy') {
            let hikesByType = [];

            this.listOfHikes.forEach(hike => {
                if (hike.difficultyLevel === criteria) {
                    hikesByType.push(hike);
                }
            });

            if (hikesByType.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

          

            return `${this.username}'s best ${criteria} hike is ${bestPeakName} peak, for ${bestTime} hours`;

        } else if (criteria === 'all') {
            let resultOfShowRecord = [];

            resultOfShowRecord.push('All hiking records:');
            this.listOfHikes.forEach(hike =>
                resultOfShowRecord.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`));

            return resultOfShowRecord.join('\n');
        }
    }
}

