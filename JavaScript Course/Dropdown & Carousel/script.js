


document.addEventListener('DOMContentLoaded', function () {


    const dropDown = document.querySelectorAll('ul');
    dropDown.forEach(ulElement => {

        ulElement.addEventListener('click', (ev) => {
            const liElements = Array.from(ulElement.children);
            liElements.forEach(liElement => {
                    liElement.classList.toggle('active');
            })
        })
    })


    let carousel = document.getElementById('image-Section');
    const controls = document.getElementById('footerControls');

    carouselLooper()


    function carouselLooper () {

        const slides = document.querySelectorAll('[data-slides] .slide');
        const activeSlide = document.querySelector('[data-active]');

        let currentIndex = [...slides].indexOf(activeSlide);

        for (let i = 0; i < slides.length; i++) {
            setTimeout( () => {

                newIndex = (currentIndex - 1 + slides.length) % slides.length;
                activeSlide.removeAttribute('data-active');
                slides[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;

            }, i * 1000)
        }

        setTimeout(carouselLooper, slides.length * 1000)
    }




    controls.addEventListener('click', (ev) => {

        const slides = document.querySelectorAll('[data-slides] .slide'); // Select all slides
        const activeSlide = document.querySelector('[data-active]'); // Find the active slide

        const currentIndex = [...slides].indexOf(activeSlide);

        if (ev.target.id === 'previous') {
            newIndex = (currentIndex - 1 + slides.length) % slides.length;
            activeSlide.removeAttribute('data-active');
            slides[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;

        } else if (ev.target.id === 'next') {
            newIndex = (currentIndex + 1) % slides.length;
            activeSlide.removeAttribute('data-active');
            slides[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        }


    })
})