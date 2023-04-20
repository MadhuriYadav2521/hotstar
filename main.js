// slider
let cardContainers = [...document.querySelectorAll('.slide-container')];
let preBtns = [...document.querySelectorAll('.back-btn')];
let nextBtns = [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width

    nextBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
}
)
