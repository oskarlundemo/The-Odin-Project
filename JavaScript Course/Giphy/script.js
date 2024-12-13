


document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'c52iw3fcSy1QjdnrH3x5n42FAmYOPVE7';


    const header = document.querySelector('header');
    const searchBar = document.querySelector('.searchBar');

    const searchBtn = document.getElementById('searchButton').addEventListener('click', function () {
        let searchTerm = document.getElementById('searchInput').value;
        let gifContainer = document.getElementById('gifContainer')

        if(!gifContainer) {
            header.classList.add('swipe');
            searchBar.classList.add('swipe');

            setTimeout(() => {
                // Move header and search bar
                header.classList.add('slideTop');
                searchBar.classList.add('slideBottom');
                header.style.gridRow = '1';
                searchBar.style.gridRow = '-1';
                gifContainer = document.createElement('div');
                gifContainer.id = 'gifContainer';
                gifContainer.classList.add('swipeLeft', 'glass');
                const gridCont = document.querySelector('.grid-container');
                gridCont.append(gifContainer);
            }, 2000);
        }

        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`, {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTimeout(() => {
                    displayGifs(data);
                }, 2000);
            })
            .catch((error) => {
                console.error('Error fetching GIFs:', error);
            });
    });




    function displayGifs(data) {

        const gifContainer = document.getElementById('gifContainer');
        while (gifContainer.hasChildNodes()) {
            gifContainer.removeChild(gifContainer.lastChild);  // Removes the last child node (the last added gif)
        }

        const gifElement = document.createElement('img');
        gifElement.src = data.data.images.original.url;

        gifContainer.append(gifElement);
    }
})

