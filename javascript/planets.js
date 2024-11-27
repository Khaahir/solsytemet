
let titel = document.querySelector(".title")
let lead  =document.querySelector(".lead")
let bread = document.querySelector(".bread")
let planetSize = document.querySelector(".size")
let distanceToSun = document.querySelector(".distance")
let maxTemp= document.querySelector(".max-temp")
let minTemp = document.querySelector(".min-temp")
let moon = document.querySelector(".moons")


 const  getKey = (async()=>{
    const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";
    const options  ={
        method : "POST"
    }
 
    try{
      let  resp = await fetch(url, options)
       let data  = await resp.json()
       key = data.key
    }
    catch(error){
        console.log(error)
    }
    return key
})




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
       console.log(data)
       titel.innerText =  data.bodies[3].name
       lead.innerText = data.bodies[3].latinName
       bread.innerText = data.bodies[3].desc
       planetSize.innerText =`${data .bodies[3].circumference} KM`
       distanceToSun.innerText =`${data .bodies[3].distance} KM`
       maxTemp.innerText = `${data .bodies[3].temp.day}`
       minTemp.innerText = `${data .bodies[3].temp.night}`
       moon.innerText = `${data.bodies[3].moons[0]}`
    }catch(error){
        console.log(error)
    }
    
    
})

getKey()
getPlanets()

