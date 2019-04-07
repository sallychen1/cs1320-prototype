(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    function startTime() {
        let today = new Date(),
            hr = checkTime(today.getHours()),
            min = checkTime(today.getMinutes()),
            sec = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = hr + ":" + min + ":" + sec;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();

let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById('date').innerHTML = months[month] + " " + day + "   " + year;

let am = 0;
function changeColor() {
    if (am == 0) {
        document.body.style.background = "linear-gradient(to bottom, #020111 10%,#3a3a52 100%)";
        am = 1;
    } else {
        document.body.style.background = "linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)";
        am = 0;
    }
    
 }



 