
class ClockPage{
    constructor(){
        ClockPage.createClock()
        ClockPage.activateClock()   
    }

    static createClock(){
        const containerDiv = document.createElement('div')
        containerDiv.classList.add('container')
        const clockNumbers = [12, 3, 6, 9]
        clockNumbers.forEach(number => {
            let clockNumber = document.createElement('span')
            clockNumber.innerText = number
            clockNumber.classList.add(`number-${number}`)
            containerDiv.appendChild(clockNumber)
        });
        const times = ['hours', 'minutes', 'seconds']
        times.forEach(time => {
            let timeItem = document.createElement('i')
            timeItem.setAttribute('id', time)
            containerDiv.appendChild(timeItem)
        });
        // Use One For loop
        document.body.appendChild(containerDiv)
    }

    static activateClock(){
        setInterval(
            () => {
              let hours = document.querySelector("#hours");
              let minutes = document.querySelector("#minutes");
              let seconds = document.querySelector("#seconds");
              const day = new Date();
              let hourDegree = day.getHours() * 30 + 270
              let minDegree = day.getMinutes() * 6 + 270
              let secDegree = day.getSeconds() * 6 + 270
              hours.style.transform = `rotate(${hourDegree}deg)`
              minutes.style.transform = `rotate(${minDegree}deg)`
              seconds.style.transform = `rotate(${secDegree}deg)`
            }
          )
    }
}

new ClockPage()