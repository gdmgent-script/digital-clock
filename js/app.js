
/**
 * Function that creates a date by Date obj
 * 
 * @returns String with date in a readable format
 */
const createDateString = (utc = 0, location) => {
    let now = new Date();

    // STEL IN OP BASIS VAN EEN REFERENTIEWAARDE // -120 --> / 60 --> -2
    now.setHours( now.getHours() + utc + now.getTimezoneOffset() / 60 );

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1; // + 1 (index)
    // let currentDay = now.getDay(); // dag van de week
    let currentDayOfMonth = now.getDate(); // dag van de week
        
    const dateStr = `${currentDayOfMonth}-${currentMonth}-${currentYear}`;
    const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    return 'Het is in ' + location + ' nu: ' + dateStr + ' ' + timeStr;
} 

const showDateInBody = () => {
    document.body.innerHTML = '<p>' + createDateString(3, 'Moskou') + '</p>';
}

const stopTheClock = () => {
    clearInterval(everySecond);
}

// voer een **functie** uit na een bepaalde **tijd**
// setTimeout(showDateInBody, 5000); // 5s x 1000 = 5000ms

// toon de datum onmiddelijk
showDateInBody();
// toon de datum na 1 seconde en herhaal dat elke seconde
const everySecond = setInterval(showDateInBody, 1000);

// interval stoppen...
setTimeout(stopTheClock, 10000);