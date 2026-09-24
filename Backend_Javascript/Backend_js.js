//    fetch api component 
const rows = document.querySelector('.row')
async function fetchAPI(){
    try{
        const res = await fetch("https://api-code-language.onrender.com/languages");
        const data = await res.json();
        console.log(data)
        rows.innerHTML = ' ';
         data.forEach( (val)=>{
            rows.innerHTML+= `<div class=" col-3 my-4">
                    <div class="card my-2 w-100 h-100">
                        <div class=" card-img-top overflow-hidden h-50">
                            <img
                                src="${val.image}" width="100%" height="100%"
                                class=" object-fit-cover"
                                alt=""
                            />
                            
                        </div>
                        <div class=" card-body">
                            <h1 class="fs-3 text-center">${val.name}</h1>
                            <p>${val.description}</p>
                        </div>
                    </div>
                </div>`
         })
        
    }catch{
        console.log("API SERVER NOT RESPONSE...!")
    }
}
fetchAPI();