const container = document.querySelector(".container");
let cardTag;
function getPhotos(images) {
    images.map(image => {
        cardTag = `<div class="card">
              <img src=${image.src.large} />
         </div>`;
        container.innerHTML += cardTag;
    })
}
function getPhotosRandom(images) {
    images.map(image => {
        cardTag = `<div class="card">
              <img src=${image.src.large} />
         </div>`;
        // container.innerHTML += cardTag;
    })
    console.log( images[Math.floor(Math.random()*images.length)] )
    container.innerHTML = images[Math.floor(Math.random()*images.length)]
}
fetch("https://api.pexels.com/v1/search?orientation=portrait&per_page=80&query=tiger",{
    headers: {
        Authorization: "563492ad6f9170000100000107d8b1e4d41241dd96a28c858b8074c6"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        getPhotosRandom(data.photos);
    })