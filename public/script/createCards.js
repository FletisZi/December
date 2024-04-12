import getImgUsers from "./apiget.js";



async function createCards(url){

    const sectionProducts = document.querySelector('.products')
     
    
    
    const produtos = await getImgUsers(url)
    
    if(produtos.length == 0){
        console.log('nao tem produtos');
    }
    
    produtos.map((produto)=>{
        const wrapperCardProduct = document.createElement('div');
        const wrapperInfo = document.createElement('div');
        const description = document.createElement('div');
        const button = document.createElement('div');
    
        wrapperCardProduct.classList.add('wrapper-card-product');
        wrapperInfo.classList.add('wrapper-info');
        description.classList.add('description');
        button.classList.add('button','comprar');
        button.textContent = `COMPRAR`;
        button.addEventListener('click', ()=>{
            console.log(produto.id)
        })
    
    
        description.textContent = `${produto.description} P, M e G`
        wrapperInfo.appendChild(description);
        wrapperInfo.appendChild(button);
    
        wrapperCardProduct.innerHTML += `<div src="" alt="" class="imgs-products" style=" background-image: url('${produto.imgURL}')"></div>`
        wrapperCardProduct.appendChild(wrapperInfo)
    
        
    
        sectionProducts.appendChild(wrapperCardProduct)
    })
}

export default createCards




