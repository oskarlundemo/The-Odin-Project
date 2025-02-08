



document.addEventListener("DOMContentLoaded", () => {
    darkMode();
    toggleFormCreate();
    deleteFolder();
    inspectFiles();
})




const inspectFiles = () => {
    const tableBody = document.querySelector("tbody");
    tableBody.addEventListener("click", (ev) => {
        if (!ev.target.classList.contains('delete')) {
            let tableRow = ev.target.closest("TR");
            let folderId = tableRow.dataset.doc;
            let folderName = tableRow.querySelector('.folder-name').textContent.trim();
            let encodedFolderName = encodeURIComponent(folderName);
            window.location.href = `http://localhost:3000/${encodedFolderName}/${folderId}`;
        }
    })
}



const deleteFolder = () => {
    const tableBody = document.querySelector("tbody");

    tableBody.addEventListener("click", (ev) => {
        if (ev.target.classList.contains("delete")) {
            let folderId = ev.target.dataset.doc;
            const endPoint = `http://localhost:3000/home/${folderId}`;

            fetch(endPoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({folderId}),
            })
                .then(res => res.json())
                .then((data) => {
                    window.location.href = data.redirect;
                })

                .catch((err) => {
                    console.log(err);
                })
        }
    })
}


const darkMode = () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarkmode = () => {
        document.documentElement.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    }
    const disableDarkmode = () => {
        document.documentElement.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    }

    if (darkmode === 'active') enableDarkmode();

    themeSwitch.addEventListener('click', function(){
        darkmode = localStorage.getItem('darkmode');
        darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    })
}


const toggleFormCreate = () => {
    const newFolderIcon = document.querySelector('.new-folder');
    const popUpModule = document.querySelector('.pop-up-box');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close');

    closeIcon.addEventListener('click', function(){
        popUpModule.classList.remove('show');
        overlay.classList.remove('show');
    })

    newFolderIcon.addEventListener('click', function(e) {
        popUpModule.classList.add('show');
        overlay.classList.add('show');

        overlay.addEventListener('click', function(){
            popUpModule.classList.remove('show');
            overlay.classList.remove('show');
        })
    })
}
