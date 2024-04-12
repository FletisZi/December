import createCards from "./createCards.js";

// const url = "http://localhost:3001/produtos"
 const url = "http://77.37.43.91:3001/produtos"


document.body.addEventListener('click', (e)=>{
    switch (e.target.id) {
        case 'btnBasics':
            // window.location.href =  "http://localhost:3001/category?nome=basics"
            window.location.href =  "http://77.37.43.91:3001/category?nome=basics"
            break;
        case 'btnFormal':
            // window.location.href =  "http://localhost:3001/category?nome=formal"
            window.location.href =  "http://77.37.43.91:3001/category?nome=formal"
            break;
        case 'btnFreeStyle':
            // window.location.href =  "http://localhost:3001/category?nome=freestyle"
            window.location.href =  "http://77.37.43.91:3001/category?nome=freestyle"
            break;        
    }

    // if(e.target.classList.value == "logo") window.location.href =  "http://localhost:3001/";
    if(e.target.classList.value == "logo") window.location.href =  "http://77.37.43.91:3001/";
    
})



var queryUrl = location.search

const splitQuery = queryUrl.split('=')


//if faz a verificação se esta na pagina home ou na pages para saber qual infromação deve buscar, se é a url padrão produtos ou a url que faz a rota que busca por category;

if(splitQuery[1] != undefined){
    // await createCards(`http://localhost:3001/types?type=${splitQuery[1]}`);

    await createCards(`http://77.37.43.91:3001/types?type=${splitQuery[1]}`);
    

}else{
    await createCards(url);
}




