class Clock{
    constructor(){
        Clock.activateClock()
    }

    static activateClock() {
        setInterval(() => {
          let hours = document.querySelector("#hours");
          let minutes = document.querySelector("#minutes");
          let seconds = document.querySelector("#seconds");
          Clock.createClockHand([seconds, minutes, hours]);
        });
      }

  static createClockHand(time) {
    time.forEach(element => {
        let timeType = element.getAttribute("id");
        let day = new Date();
        if (timeType === "seconds") {
            let secDegree = day.getSeconds() * 6 + 270;
            seconds.style.transform = `rotate(${secDegree}deg)`;
        } else if (timeType === "minutes") {
            let minDegree = day.getMinutes() * 6 + 270;
            minutes.style.transform = `rotate(${minDegree}deg)`;
        } else if (timeType === "hours") {
            let hourDegree = day.getHours() * 30 + 270;
            hours.style.transform = `rotate(${hourDegree}deg)`;
        }
    });
    }

}

class ClockPage {
  constructor() {
    ClockPage.createClockItems();
    new Clock();
  }

  static createClockItems() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const clockNumbers = [12, 3, 6, 9];
    clockNumbers.forEach((number) => {
      let clockNumber = document.createElement("span");
      clockNumber.innerText = number;
      clockNumber.classList.add(`number-${number}`);
      containerDiv.appendChild(clockNumber);
    });
    const times = ["hours", "minutes", "seconds"];
    times.forEach((time) => {
      let timeItem = document.createElement("i");
      timeItem.setAttribute("id", time);
      containerDiv.appendChild(timeItem);
    });
    document.body.appendChild(containerDiv);
  }

}

new ClockPage();
