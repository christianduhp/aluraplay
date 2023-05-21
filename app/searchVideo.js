import apiConect from "./apiConect.js";
import displayCard from "./displayVideos.js";

const list = document.querySelector("[data-list]");
const videoList = document.querySelector("[data-list]");
const searchInputs = document.querySelectorAll("[data-search]");
const searchButtons = document.querySelectorAll("[data-search-button]");

async function searchVideo(event) {
  try {
    event.preventDefault();
    const searchValue = event.target.previousElementSibling.value;
    if (!searchValue) {
      return;
    }

    const search = await apiConect.searchVideo(searchValue);

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    search.forEach(element =>
      list.appendChild(
        displayCard(element.titulo, element.url, element.imagem, element.descricao)
      )
    );

    console.log("server", search);

  } catch (error) {
    event.preventDefault();

    const searchValue = event.target.previousElementSibling.value;
    const search = await apiConect.showVideos();
    const videos = search.videos;

    videoList.innerHTML = "";

    const filteredVideos = videos.filter(element =>
      element.titulo.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredVideos.length === 0) {
      videoList.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    } else {
      filteredVideos.forEach(element =>
        videoList.appendChild(
          displayCard(element.titulo, element.url, element.imagem, element.descricao)
        )
      );
    }
    console.log("local", search);
  }
}

searchButtons.forEach(button => {
  button.addEventListener("click", event => searchVideo(event));
});

searchInputs.forEach(input => {
  input.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      searchVideo(event);
    }
  });
});
