const settingsBtn = document.querySelector('.settings-btn')
const settings = document.querySelector('.settings');
const imageSection = document.querySelector('.image-section');
const timeSection = document.querySelector('.time-section');
const timeCards = document.querySelector('.time-cards'); 


const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count')

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event')

let usersTime;

const setTime = () =>{
    const currentTime = new Date();
    const result = usersTime - currentTime;
    console.log(result);
    const  days = Math.floor(result / 1000 / 60 / 60 / 24)
    const  hours = Math.floor(result / 1000 / 60 / 60) %24;
    const  minutes = Math.floor(result / 1000 / 60 ) %60;
    const  seconds = Math.floor(result / 1000 ) %60;
   
    daysCount.textContent = days;
    
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}
const appUpdate = () =>{
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
    imageSection.style.backgroundImage = `url(${eventImage.value})`
    setTime()
}
setTime()
appUpdate()
setInterval(setTime,1000)
saveBtn.addEventListener('click', appUpdate)
settingsBtn.addEventListener('click', () => {

    settings.classList.toggle('active'); // Dodaje lub usuwa klasę .active
});
