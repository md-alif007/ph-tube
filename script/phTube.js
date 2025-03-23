function loadCatagories() {

    // 1.fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')

        // 2.convert the promise into json
        .then(res => res.json())

        // 3.send data to displayCatagoris
        .then(data => displayCatagories(data.categories));

};

// loads the video on click 
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

// creating the buttons for displaying categories 
function displayCatagories(catagories) {

    // get the container
    const catagoryContainer = document.getElementById('catagory-container');

    // Loop operation on array of object
    for (let cat of catagories) {

        // creat element
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `

        <button onclick="loadCategoryVideos( ${cat.category_id} )" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        
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

// creating the card and displaying it 
const displayVideos = (videos) => {

    const videoContainer = document.getElementById('video-container');

    // removes everything
    videoContainer.innerHTML = "";

    if (videos.length == 0) {

        videoContainer.innerHTML = `
        
        <div class="col-span-full flex flex-col text-center justify-center items-center p-16" >
            <img class="w-[120px]" src="./assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold" >Oops!! Sorry, There is no content here</h2>
        </div>
        
        `
        return;
    }

    videos.forEach(video => {
        // console.log(video);

        //create element
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        
        <div class="card bg-base-100">

            <figure class="relative">
                <img class="w-full h-[150px] object-cover " src=" ${video.thumbnail} " alt="Shoes" />
                <span class="absolute bottom-4 right-4 bg-slate-800 text-white text-sm rounded-md p-1 ">3hrs 56 
                min ago</span>
            </figure>

            <div class="flex gap-3 px-0 py-5">

                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img src=" ${video.authors[0].profile_picture} " />
                        </div>
                    </div>
                </div>

                <div class="intro">
                    <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                    <p class="text-sm text-gray-400 flex gap-1"> ${video.authors[0].profile_name}
                        <img class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8358/8358886.png" alt="">
                    </p>
                    <p class="text-sm text-gray-400"> ${video.others.views} views</p>
                </div>

            </div>

        </div>
        
        `

        // append
        videoContainer.append(videoCard);

    });

};

// getting every type of categories by their id
const loadCategoryVideos = (id) => {
    // console.log(id);

    // creat a url dynamically for different buttons
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

    // fetch the url
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.category));



}

loadCatagories();
