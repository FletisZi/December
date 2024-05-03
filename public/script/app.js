import createCards from "./createCards.js";

// const url = "http://localhost:3001"
const url = "http://77.37.43.91:3001"


document.body.addEventListener('click', (e)=>{
    switch (e.target.id) {
        case 'btnBasics':

            window.location.href =  `${url}/category?nome=basics`
            break;
        case 'btnFormal':
            window.location.href =  `${url}/category?nome=formal`
            break;
        case 'btnFreeStyle':          
            window.location.href =  `${url}/category?nome=freestyle`
            break;        
    }

    
    if(e.target.classList.value == "logo") window.location.href =  `${url}`;
    
})



var queryUrl = location.search

const splitQuery = queryUrl.split('=')


//if faz a verificação se esta na pagina home ou na pages para saber qual infromação deve buscar, se é a url padrão produtos ou a url que faz a rota que busca por category;

if(splitQuery[1] != undefined){
    await createCards(`${url}/types?type=${splitQuery[1]}`);

}else{
    await createCards(`${url}/produtos`);
}




