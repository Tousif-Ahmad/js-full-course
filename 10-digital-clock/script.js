const clock = document.querySelector("#clock");
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());

//   show time 
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
