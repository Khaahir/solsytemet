import { getKey } from "./api.js";
let planetcolor = document.querySelector(".side-planet");
let planetshadow = document.querySelector(".shadow-planet");
let titel = document.querySelector(".title");
let lead = document.querySelector(".lead");
let bread = document.querySelector(".bread");
let planetSize = document.querySelector(".size");
let distanceToSun = document.querySelector(".distance");
let maxTemp = document.querySelector(".max-temp");
let minTemp = document.querySelector(".min-temp");
let moon = document.querySelector(".moons");

const getPlanets = async () => {
  const key = await getKey();
  let planetID = localStorage.getItem("planet"); // här hämtas värdet till planetID som sedan används i DOM

  const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";
  const options = {
    method: "GET",
    headers: { "x-zocom": key },
  };
  try {
    let resp = await fetch(url, options);
    let data = await resp.json();

    titel.innerText = data.bodies[planetID].name.toUpperCase();
    lead.innerText = data.bodies[planetID].latinName.toUpperCase();
    bread.innerText = data.bodies[planetID].desc;
    planetSize.innerText = `${data.bodies[
      planetID
    ].circumference.toLocaleString()} km`;
    distanceToSun.innerText = `${data.bodies[
      planetID
    ].distance.toLocaleString()} km`;
    maxTemp.innerHTML = `${data.bodies[planetID].temp.day}&deg`;
    minTemp.innerHTML = `${data.bodies[planetID].temp.night}&deg`;
    moon.innerText = `${data.bodies[planetID].moons}`;
  } catch (error) {
    console.log(error);
  }

  if (planetID === "0") {
    planetcolor.style.backgroundColor = "#daa520";
    planetshadow.style.backgroundColor = "#ffd1292c";
  } else if (planetID === "1") {
    planetcolor.style.backgroundColor = "#888888";
    planetshadow.style.backgroundColor = "#88888823";
  } else if (planetID === "2") {
    planetcolor.style.backgroundColor = "#e7cdcd";
    planetshadow.style.backgroundColor = "e7cdcd1e";
  } else if (planetID === "3") {
    planetcolor.style.backgroundColor = "428ed4";
    planetshadow.style.backgroundColor = "#428dd41c";
  } else if (planetID === "4") {
    planetcolor.style.backgroundColor = "#ef5f5f";
    planetshadow.style.backgroundColor = "#ef5f5f2f";
  } else if (planetID === "5") {
    planetcolor.style.backgroundColor = "#e29468";
    planetshadow.style.backgroundColor = "#e2956841";
  } else if (planetID === "6") {
    planetcolor.style.backgroundColor = "#c7aa72";
    planetshadow.style.backgroundColor = "#c7ab7244";
  } else if (planetID === "7") {
    planetcolor.style.backgroundColor = "#c9d4f1";
    planetshadow.style.backgroundColor = "#c9d4f171";
  } else if (planetID === "8") {
    planetcolor.style.backgroundColor = "#7a91a7";
    planetshadow.style.backgroundColor = "#7a91a76e";
  }
};

getPlanets();
