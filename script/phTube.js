function loadCatagories() {

    // 1.fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')

        // 2.convert the promise into json
        .then(res => res.json())

        // 3.send data to displayCatagoris
        .then(data => displayCatagories(data.categories));

};

function loadVideos() {

    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos));

};

// catagories
// {
//     "category_id": "1001",
//     "category": "Music"
// }

function displayCatagories(catagories) {

    // get the container
    const catagoryContainer = document.getElementById('catagory-container');

    // Loop operation on array of object
    for (let cat of catagories) {

        // creat element
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `

        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        
        `;

        // apppend element
        catagoryContainer.append(catagoryDiv);

    }

};


// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }


const displayVideos = (videos) => {

    const videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
        console.log(video);

        //create element
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        
       <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `

        // append
        videoContainer.append(videoCard);

    });

};

loadCatagories();
loadVideos()