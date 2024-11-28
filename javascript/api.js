
// hämtar nycklen för api och export till planet.js 
export const  getKey = (async(key)=>{
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


