"use strict";

const startBtnEl = document.querySelector('#start-btn')
const stopBtnEl = document.querySelector('#stop-btn')
let update = () =>{
    let clockEl = document.querySelector('#clock')
    let getDate = new Date()
    let hours = getDate.getHours()
        if (hours < 10) {
            hours = `0${hours}`
        } else if (hours < 12){
            clockEl.children[3].textContent = "AM"
        } else{
            clockEl.children[3].textContent = "PM"
        }
        clockEl.children[0].textContent = hours
    let minutes = getDate.getMinutes()
        if(minutes < 10){
            minutes = `0${minutes}`
        }
        clockEl.children[1].textContent = minutes
    let seconds = getDate.getSeconds()
        if(seconds < 10){
            seconds = `0${seconds}`
        }
        clockEl.children[2].textContent = seconds
}
update()
let timerId;
let startClock = () =>{
    timerId = setInterval(update, 1000)
}
let stopClock = () =>{
    clearInterval(timerId)
    timerId = null
}
startClock()
startBtnEl.addEventListener('click', () =>{
    startClock()
})
stopBtnEl.addEventListener('click', () =>{
    stopClock()
})