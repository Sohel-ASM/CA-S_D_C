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
