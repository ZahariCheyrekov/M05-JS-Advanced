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

    

   

    
}

