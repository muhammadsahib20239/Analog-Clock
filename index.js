// Select the clock hands from the DOM
const hour = document.getElementById('hour');//target the hour hand
const minute = document.getElementById('minute');//target the minute hand
const second = document.getElementById('second');//target the second hand

// Function to update the clock hands based on current time

function updateClock() {
  const d = new Date();//get the current time
  const h = d.getHours() % 12;// Convert to 12-hour format
  const m = d.getMinutes();//get the current minutes
  const s = d.getSeconds();//get the current seconds
// Calculate the degrees for each hand
  const hDeg = 30 * h + m * 0.5; // 30° per hour + 0.5° per minute
  const mDeg = 6 * m;            // 6° per minute
  const sDeg = 6 * s;            // 6° per second
// Apply the rotation to each hand
  hour.style.transform = `rotate(${hDeg}deg)`;//rotate the hour hand
  minute.style.transform = `rotate(${mDeg}deg)`;//rotate the minute hand
  second.style.transform = `rotate(${sDeg}deg)`;//rotate the second hand
}
// Initial call and set interval to update every second
updateClock();            // show correct time immediately
setInterval(updateClock, 1000); // then update every second
