const loadRandomPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadedPhotos(data))
}

const displayLoadedPhotos = photos => {
    const loadImages = document.getElementById('load-images');
    loadImages.textContent = ``;
    photos.forEach(photo => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('col');
        imageDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${photo.title}</h5>
                      <button onclick="loadDynamicPhotos(${photo.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#photoModal">Details</button>
                      
                    </div>
                  </div>
        `;
        loadImages.appendChild(imageDiv);
    })
}

const loadDynamicPhotos = photoId => {
    const url = `https://jsonplaceholder.typicode.com/albums/${photoId}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayDynamicPhotos(data))
}

const displayDynamicPhotos = dynamicPhotos => {
    const photoTitle = document.getElementById('photo-title');
    const photosDetails = document.getElementById('photos-details')
    photoTitle.innerText = dynamicPhotos.title;
    photosDetails.innerHTML = `
    <p>User Id: ${dynamicPhotos.userId}</p>
    <p>Id: ${dynamicPhotos.id}</p>
    `;
    // photosDetails.appendChild(photosDetails.innerHTML);
}