




document.addEventListener("DOMContentLoaded", () => {
    darkMode();
    toggleFormCreate();
    deleteFile();
    downloadFile();
})




const downloadFile = () => {
    const tableBody = document.querySelector("tbody");

    tableBody.addEventListener("click", async (ev) => {

        if (ev.target.classList.contains("download")) {
            const data = JSON.parse(ev.target.dataset.doc);

            let fileId = data.fileId;
            let folderId = data.folderId;
            let folderName = encodeURIComponent(data.folderName)


            try {
                const endPoint = `http://localhost:3000/${folderName}/${folderId}/${fileId}`;

                const response = await fetch(endPoint)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }


                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const contentDisposition = response.headers.get("Content-Disposition");
                let filename = "downloaded_file";
                if (contentDisposition) {
                    const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
                    if (match && match[1]) {
                        filename = match[1].replace(/['"]/g, '');
                    }
                }

                // Create a hidden link and trigger the download
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // Clean up URL object
                window.URL.revokeObjectURL(url);
            } catch (err) {
                console.error("Download failed:", err);
            }
        }
    })

}




const deleteFile = () => {
    const tableBody = document.querySelector("tbody");

    tableBody.addEventListener("click", (ev) => {

        if (ev.target.classList.contains("delete")) {
            const data = JSON.parse(ev.target.dataset.doc);

            console.log('I file.js');
            console.log(data);

            let fileId = data.fileId;
            let folderId = data.folderId;
            let folderName = encodeURIComponent(data.folderName)

            const endPoint = `http://localhost:3000/${folderName}/${folderId}/${fileId}/`;

            fetch(endPoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
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
    const newFolderIcon = document.querySelector('.new-file-btn');
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
