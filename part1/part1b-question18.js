function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let intervalID = setInterval(printTime,1000);