//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    console.log(`${hour}:${min}:${sec}`);

    let AmPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;

    console.log(`${hour}:${min}:${sec} ${AmPm}`);
}

setInterval(clock, 1000);