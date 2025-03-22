function loadCatagories() {

    // 1.fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')

        // 2.convert the promise into json
        .then(res => res.json())
        // 3.send data to displayCatagoris
        .then(data => displayCatagories(data.categories));

}

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
        catagoryDiv.innerHTML =
        `
        <button class="btn btn-sm">${cat.category}</button>

        
        
        `;

        // apppend element
        catagoryContainer.append(catagoryDiv);

    }

}


loadCatagories();