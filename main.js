const getSleepHours = (day) => {
    day = day.toLowerCase()
    switch (day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 8;
            break;
        case 'wednesday':
            return 8;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 8;
            break;
        case 'saturday':
            return 18;
            break;
        case 'sunday':
            return 8;
            break;
    }
};
const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours > idealSleepHours) {
        let extraHours = (actualSleepHours - idealSleepHours);
        console.log(`You are getting ${extraHours} hours more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
        let lessHours = (idealSleepHours - actualSleepHours);
        console.log(`You are getting ${lessHours} hours less sleep than needed. You should get some rest.`);
    } else {
        console.log('You are getting perfect amount of sleep.');
    }

};

calculateSleepDebt();
