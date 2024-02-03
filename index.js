const burger = document.querySelector('.burger');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const navLinks = document.querySelector('ul');
const title = document.querySelector('h1');
const header = document.querySelector('.nav-header');
const body  = document.querySelector('body');
burger.addEventListener('click', navToggle)
function navToggle (){
    if(!burger.classList.toggle('burger')){
        burger.classList.add('active');
    }else{
        burger.classList.toggle('active');
    }
    if(burger.classList.toggle('burger')){

        slide1.classList.toggle('slide-active-1');
        slide2.classList.toggle('slide-active-2');
        slide3.classList.toggle('slide-active-3');
        navLinks.classList.toggle('open');
       
           };
};
navLinks.addEventListener('click', navToggle);
const portfolio = document.querySelector('.portfolio');

const modalData = [
    { heading: 'Product Design', imageSrc: './product-design.jpg', footerText: 'Design/Marketing' },
    { heading: 'Product Design', imageSrc: './product-1.avif', footerText: 'Design/Marketing' },
    { heading: 'Product Design', imageSrc: './product-2.avif', footerText: 'Design/Marketing' },
    { heading: 'Product Design', imageSrc: './product-3.avif', footerText: 'Design/Marketing' },
    { heading: 'Product Design', imageSrc: './product-4.avif', footerText: 'Design/Marketing' },
    { heading: 'Product Design', imageSrc: './product-5.avif', footerText: 'Design/Marketing' }
];
modalData.forEach((data, index) => {
    const div = document.createElement('div');
    div.classList.add('modal');
    const image = document.createElement('img');
    image.src = data.imageSrc;
    div.appendChild(image);
    portfolio.appendChild(div);

    div.addEventListener('click', function () {
        // console.log(`Clicked on element ${index + 1}`);
        createModal(data.heading, data.imageSrc, data.footerText);
    });
    div.addEventListener('mouseenter', () => {
        // Create and append the element you want to add when hovering
        const hoverElement = document.createElement('div');
        hoverElement.classList.add('hover-element');
        div.appendChild(hoverElement);
    
    });

    // Remove the element when mouse leaves
    div.addEventListener('mouseleave', () => {
        const hoverElement = div.querySelector('div');
        if (hoverElement) {
            div.removeChild(hoverElement);
        }
    });

    portfolio.appendChild(div);
});

 

function createModal(heading, imageSrc, footerText) {
    console.log('create modal function excuted');
    const modal = document.createElement('div');
    modal.classList.add('mdl');
    modal.innerHTML = `
        <div class="heading">
            <h1>${heading}</h1>
            <button class="close-btn">X</button>
        </div>
        <img src="${imageSrc}" alt="">
        <div class="footer">
            <p>${footerText}</p>
        </div>
    `;

    portfolio.appendChild(modal);

    const closeButton = modal.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

};

const controller = new ScrollMagic.Controller();
const h1Tween = gsap.from(".home-text h1",{
opacity:0,
duration:2,
y:200
})
const h1Scene = new ScrollMagic.Scene({
    triggerElement:".home-text h1"
})

const h2Tween = gsap.from(".home-text h2",{
opacity:0,
duration:2,
x:-30,
y:200
})
const h3Scene = new ScrollMagic.Scene({
    triggerElement:".home-text h3"
})
   const h3Tween= gsap.from(".home-text h3",{ 
    opacity:0,
    duration:2,
    x:-30,
    y:200
    })
    const btnscene = new ScrollMgic.scene({
        triggerElement:".home-btn"
    })
    const btnTween = gasp.from('.home-btn',{
    y:200,
    opcity:0,
    scale:0
    })
.setTween(btnTween)
.setTween(h1Tween)
.setTween(h2Tween)
.setTween(h3Tween)
.addTo(controller)