
import { getKey} from "./api.js"
let titel = document.querySelector(".title")
let lead  =document.querySelector(".lead")
let bread = document.querySelector(".bread")
let planetSize = document.querySelector(".size")
let distanceToSun = document.querySelector(".distance")
let maxTemp= document.querySelector(".max-temp")
let minTemp = document.querySelector(".min-temp")
let moon = document.querySelector(".moons")




 const getPlanets = (async()=>{
        
    const key = await getKey()
    
    const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";
    const options = {
     method: "GET",
     headers: {'x-zocom': key } 
    }
    try{   
     let resp = await fetch(url, options)
    let data = await resp.json()
    titel.innerText =  data.bodies[2].name.toUpperCase()
   lead.innerText = data.bodies[2].latinName.toUpperCase()
   bread.innerText = data.bodies[2].desc
   planetSize.innerText =`${data .bodies[2].circumference.toLocaleString()} km`
   distanceToSun.innerText =`${data .bodies[2].distance.toLocaleString()} km`
   maxTemp.innerHTML = `${data .bodies[2].temp.day}&deg`
   minTemp.innerHTML = `${data .bodies[2].temp.night}&deg`
   moon.innerText = `${data.bodies[2].moons[1]} `
   console.log(data)
    }catch(error){
    console.log(error)
    }
    
    
})

getPlanets()

