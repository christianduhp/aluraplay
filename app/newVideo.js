import apiConect from "./apiConect.js"

const form = document.querySelector("[data-form]");

async function newVideo(event) {
    event.preventDefault();

    const titulo = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-img]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await apiConect.newVideo(titulo, descricao, url, imagem)

        window.location.href = "../pages/envio-concluido.html"
    } catch (e){
        alert(e)
    }
}

form.addEventListener("submit", event => newVideo(event));
