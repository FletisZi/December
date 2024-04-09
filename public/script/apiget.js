async function getImgUsers(urlConsult){
    const reponse = await fetch(urlConsult)
    const data = await reponse.json();
    return (data)
}

export default getImgUsers