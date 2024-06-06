const arrowList = document.querySelector('.arrow-list');
const arrows = arrowList.querySelectorAll('.arrow');
let currentIndex = 0;

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        currentIndex = index;
        updateActiveArrow();
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = arrows.length - 1;
        }
        updateActiveArrow();
    } else if (event.key === 'ArrowDown') {
        currentIndex++;
        if (currentIndex >= arrows.length) {
            currentIndex = 0;
        }
        updateActiveArrow();
    }
});

function updateActiveArrow() {
    arrows.forEach((arrow) => {
        arrow.classList.remove('active');
    });
    arrows[currentIndex].classList.add('active');
    arrowList.scrollTop = arrows[currentIndex].offsetTop - (arrowList.offsetHeight / 2);
}