const localUrl = "db.json";
const url = "http://localhost:3000/videos";

async function showVideos() {
  try {
    const serverResponse = await fetch(url);
    
    if (serverResponse.ok) {
      const serverData = await serverResponse.json();
      console.log("Data from server:", serverData);
      return serverData;
    }
  } catch (error) {
    console.error("Failed to connect to the server:", error);

    // Se ocorrer um erro ou a resposta do servidor não for ok
    const localResponse = await fetch(localUrl);
    const localData = await localResponse.json();
    console.log("Data from local URL:", localData);
    return localData;
  }
}

async function newVideo(titulo, descricao, videoUrl, imagem) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: videoUrl,
            imagem: imagem
        })
    });

    if (!response.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const data = await response.json();
    return data;
}

async function searchVideo(searchValue) {
    const response = await fetch(`${url}?q=${searchValue}`);
    const data = await response.json();
    return data;
}

export default {
    showVideos,
    newVideo,
    searchVideo
};

