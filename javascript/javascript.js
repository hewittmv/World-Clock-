function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector(".date");
  let londonTimeElement = document.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A [</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
