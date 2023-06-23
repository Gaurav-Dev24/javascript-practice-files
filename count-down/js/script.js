// giving dynamic date
const endDate = "31 July 2023 00:00:00 AM"; 
document.getElementById("end-date").innerText = endDate;

// selecting all the inputs
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    // taking the diffrence of the dates to assign the values
    const diff = (end - now) / 1000; // convert the difference into seconds

    console.log(diff);
    // to avoid negative values onces the countdown ends
    if (diff<0) return;

    // finding out the remaining days
    inputs[0].value = Math.floor(diff / 3600 /24);

    // finding out the remaining hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // finding out the remaining minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    // finding out the remaining seconds
    inputs[3].value = Math.floor(diff % 60);

}

// initial call of the function once the page is loaded
clock();

// clock function will be called after every 1s. 
setInterval(() => {
    clock()
}, 1000);