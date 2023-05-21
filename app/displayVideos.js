import apiConect from "./apiConect.js"

const videoList = document.querySelector("[data-list]");

export default function displayCard(titulo, url, imagem, descricao) {
    const videoItem = document.createElement("li");
    videoItem.className = "videos__item";
    videoItem.innerHTML = `<li class="videos__item">
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    </li>`;

    return videoItem;
}


async function fetchVideos() {
    const apiList = await apiConect.showVideos();
    const videos = apiList.videos;

    try {  // getting data from server

        apiList.forEach(element => videoList.appendChild(
            displayCard(element.titulo, element.url, element.imagem, element.descricao)
        ));

    } catch {

        try { // getting data from local json    
            videos.forEach(element => videoList.appendChild(
                displayCard(element.titulo, element.url, element.imagem, element.descricao)
            ));
            
        } catch {
            videoList.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de videos</h2>`;
        }
    }




}


fetchVideos();
