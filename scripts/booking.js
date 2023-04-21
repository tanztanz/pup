/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?



let dayCounter = 0;
const fullDayCost = 35;
const halfDayCost = 20;
let dailyRate = fullDayCost;
const calculatedCost = document.getElementById('calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const days = document.querySelectorAll('.day-selector li');
days.forEach(day => {
    day.addEventListener('click', () => {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            dayCounter++;
        }
        calculatedCost.innerHTML = dailyRate * dayCounter;
    })
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    days.forEach(day => {
        day.classList.remove('clicked');
    })
    dayCounter = 0;
    dailyRate = fullDayCost;
    calculatedCost.innerHTML = 0;
})

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfDayButton = document.getElementById('half');
halfDayButton.addEventListener('click', () => {
    dailyRate = halfDayCost;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculatedCost.innerHTML = dailyRate * dayCounter;
})


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullDayButton = document.getElementById('full');
fullDayButton.addEventListener('click', () => {
    dailyRate = fullDayCost;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculatedCost.innerHTML = dailyRate * dayCounter;
})


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
calculatedCost.innerHTML = 0;