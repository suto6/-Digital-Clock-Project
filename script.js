const clockElement = document.getElementById('Clock')

setInterval(function () {
    let date = new Date();
    clockElement.innerHTML = date.toLocaleTimeString()
}, 1000)