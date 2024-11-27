


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


getKey()


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
    }catch(error){
        console.log(error)
    }

    
})


getPlanets()