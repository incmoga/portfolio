const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active'); //create class active for menu "burger"
    document.body.classList.toggle('no-scroll'); //create class no-scroll for body
    menuBtn.classList.toggle('active');

})

const menuLink = document.querySelectorAll('.menu__link'); //behavior when click on a link

menuLink.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const linkId = this.getAttribute('href');
        const linkSection = document.querySelector(linkId)
        console.log(linkId);
        
        menuBtn.classList.remove('active');
        menuList.classList.remove('active');
        document.body.classList.remove('no-scroll');

        linkSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
})