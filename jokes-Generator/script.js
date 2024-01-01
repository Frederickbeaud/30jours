const btnEl = document.getElementById("btn");
const jokeEl =document.getElementById("joke")
const apiKey = "rx0OjzpRCGEHu/G+8OpLlA==DqBLV8ACh3e1dJz5";

const options = {
    method:"GET",
    Headers:{
        "X-Api-key":apiKey
    },
}
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const getJoke = async ()=>{

    try {
        jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL,options);
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    const data = await response.json();
    console.log(data[0])
    jokeEl.innerText = data[0];
    } catch (error) {
        jokeEl.innerText = "an error happened, try again later";
        btnEl.innerText = "Tell me a Joke";
        console.log(error)
    }
    

}

btnEl.addEventListener("click",getJoke)