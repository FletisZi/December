let product = function(urlIMG,description,id){
    return(
        `

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./public/style/styled.css">
    <link rel="stylesheet" href="./public/style/noticies.css">
    <link rel="stylesheet" href="./public/style/header.css">
    <link rel="stylesheet" href="./public/style/banner.css">
    <link rel="stylesheet" href="./public/style/category.css">
    <link rel="stylesheet" href="./public/style/products.css">
    <link rel="stylesheet" href="./public/style/main.css">
    <link rel="stylesheet" href="./public/style/buttons.css">
    <link rel="stylesheet" href="./public/style/product_perfil.css">
    <link rel="stylesheet" href="./public/style/footer.css">

    <title>Herald Gentlemen</title>
</head>
<body>
    <div class="noticies">FRETE GRÁTIS A PARTIR DE R$ 100</div>
    <header class="header">
        <div class="logo"></div>
    </header>

    <main>
    <section class="product">          
        <div class="container-product-perfil">
            <div class="imgProduct" alt="img camiseta" style="background-image: url('${urlIMG}');"></div>
            <div class="wrapper-descriptions">
                <div class="description-perfil">
                    ${description}
                </div>
                <a href="https://web.whatsapp.com/send?phone=5517992741290&text=Ol%C3%A1!%20Fiquei%20interessado%20em....${id}" class="button comprar product" data-id="${id}">COMPRAR</a>
            </div>

        </div>
        
    </section>   

    </main>

    <footer class="footer">
        <article>
            <h2>FORMAS DE PAGAMENTOS</h2>
            <div class="imgs-pagamento">
                <div class="pagments" style="background-image: url('https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png');"  width="40px"></div>
                <div class="pagments" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/51/Elo_logo.png');" width="50px"></div>
                <div class="pagments" style="background-image: url('https://telesintese.com.br/wp-content/uploads/2021/08/cielo-logo-divulgacao-digital-money-informe.jpeg');" width="40px""></div>
            </div>
        </article>
        <article>
            <h2>CATEGORIAS</h2>
            <ul>
                <li><a href="http://77.37.43.91:3001/category?nome=basics" class="links-footer">Basicas</a></li>
                <li><a href="http://77.37.43.91:3001/category?nome=formal" class="links-footer">Formal</a></li>
                <li><a href="http://77.37.43.91:3001/category?nome=freestyle" class="links-footer">Free Style</a></li>
            </ul>   
                
                
        </article>
        <article>
            <h2 class="title">ENTRE EM CONTATO</h2>
            <ul>
                <li ><a class="links-footer" href=" https://www.instagram.com/december/" target="_blank" >December</a></li>
                <li><a  class="links-footer" href="https://web.whatsapp.com/send?phone=5517997269081&text=Ol%C3%A1!%20Ola%20em...." target="_blank">(17)99274-1290</a></li>
                
            </ul> 
           
        </article>
    </footer>
</body>

<script>
    document.querySelector('.logo').addEventListener('click', ()=>{
        window.location.href = "http://77.37.43.91:3001/"
    })
</script>
</html>


`
    )
}


module.exports = product