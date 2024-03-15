//animation-01
document.addEventListener("DOMContentLoaded", () => {
    const animateOnScrollYElements = document.querySelectorAll(".animate-on-scroll-y");

    function checkScroll() {
        animateOnScrollYElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.9) {
                element.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});


//animation-02
document.addEventListener("DOMContentLoaded", () => {
    const animateOnScrollXElements = document.querySelectorAll(".animate-on-scroll-x");

    function checkScroll() {
        animateOnScrollXElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.9) {
                element.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});



//collapse

function toggleSitemap() {
    const sitemapLists = document.querySelectorAll('.sitemap-list');
    const toggleBtns = document.querySelectorAll('.toggle-sitemap-btn');

    sitemapLists.forEach((sitemapList, index) => {
        const toggleBtn = toggleBtns[index];
        
        if (window.innerWidth < 576) {
            sitemapList.classList.add('collapse');
        } else {
            sitemapList.classList.remove('collapse');
            sitemapList.classList.add('show');
        }

        toggleBtn.addEventListener('click', function () {
            if (window.innerWidth < 576) {
                sitemapList.classList.toggle('show');
            }
        });
    });
}


window.addEventListener('load', toggleSitemap);
window.addEventListener('resize', toggleSitemap);




//rotate-icon
document.addEventListener('DOMContentLoaded', function () {
    const rotateIcons = document.querySelectorAll('.rotate-icon');

    const toggleBtns = document.querySelectorAll('.toggle-sitemap-btn');
    toggleBtns.forEach((toggleBtn, index) => {
        toggleBtn.addEventListener('click', function () {
            rotateIcons[index].classList.toggle('animate');
        });
    });
});


//move on hover
function moveOnHover(elements) {
    elements.forEach((element) => {
        let translateX = 0;
        let translateY = 0;
        let lastTranslateX = 0;
        let lastTranslateY = 0;
        const smoothFactor = 0.2;

        element.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();
            const xCenter = left + width / 2;
            const yCenter = top + height / 2;

            const angle = Math.atan2(clientY - yCenter, clientX - xCenter);
            const distance = Math.min(100, Math.sqrt((clientX - xCenter) ** 2 + (clientY - yCenter) ** 2));

            translateX = distance * Math.cos(angle);
            translateY = distance * Math.sin(angle);

            lastTranslateX += (translateX - lastTranslateX) * smoothFactor;
            lastTranslateY += (translateY - lastTranslateY) * smoothFactor;

            element.style.transform = `translate(${lastTranslateX}px, ${lastTranslateY}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
            translateX = 0;
            translateY = 0;
            lastTranslateX = 0;
            lastTranslateY = 0;
        });
    });
}

const move = document.querySelectorAll('.move-on-hover');
moveOnHover(move);


//mouse over
const textContainer = document.getElementById('easterText');
const imageContainer = document.getElementById('easterImg');

textContainer.addEventListener('mouseover', () => {
    if (window.innerWidth > 992) {
        textContainer.style.display = 'none';
        imageContainer.style.display = 'block';
    } else {
        textContainer.style.display = 'block';
        imageContainer.style.display = 'none';
    }
});

imageContainer.addEventListener('mouseleave', () => {
    textContainer.style.display = 'inline-block';
    imageContainer.style.display = 'none';
});