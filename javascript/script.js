let sun = document.querySelector(".sun");
let tellus = document.querySelector(".tellus");
let venus = document.querySelector(".venus");
let mars = document.querySelector(".mars");
let jupiter = document.querySelector(".jupiter");
let mercury = document.querySelector(".mercury");
let saturn = document.querySelector(".saturn");
let uranus = document.querySelector(".uranus");
let neptune = document.querySelector(".neptune");
let chooseplanet = document.querySelector(".wrapper");

// i denna function sätter jag ett värde i local storage som sedan kommer att användas i /planeter.js
//där den kommer att hämta local storages värde med en get istället och använda värdet för att bestämma vilken data som ska komma ut

chooseplanet.addEventListener("click", (event) => {
  if (event.target.classList.contains("sun")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "0");
  } else if (event.target.classList.contains("mercury")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "1");
  } else if (event.target.classList.contains("venus")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "2");
  } else if (event.target.classList.contains("tellus")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "3");
  } else if (event.target.classList.contains("mars")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "4");
  } else if (event.target.classList.contains("jupiter")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "5");
  } else if (event.target.classList.contains("saturn")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "6");
  } else if (event.target.classList.contains("uranus")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "7");
  } else if (event.target.classList.contains("neptune")) {
    window.location.href = "/html/planeter.html";
    localStorage.setItem("planet", "8");
  }
});
