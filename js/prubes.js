const container = document.querySelector(".container");
let cardTag;
function getPhotos(images) {
    images.map(image => {
        cardTag = `<div class="card">
              <img src=${image.src.small} />
         </div>`;
        container.innerHTML += cardTag;
    })
}
fetch("https://api.pexels.com/v1/search?query=astronaut",{
    headers: {
        Authorization: "563492ad6f9170000100000107d8b1e4d41241dd96a28c858b8074c6"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        getPhotos(data.photos);
    })