let btn=document.getElementById("Btn")
let result=document.getElementById("result")

btn.addEventListener("click",()=>{
    let url=`https://randomfox.ca/floof/`;
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            result.innerHTML=`<a href="${data.link}">Details<a/><img src="${data.image}" alt="rendon fox image">`
        })
        .catch((error)=>{
            console.error("Error fetching data:",error);
            result.innerHTML="Failed to fetch fox image"
        })
})