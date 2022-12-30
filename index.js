const navigationToggle = document.querySelector('.navigationToggle');
const navigation = document.querySelector('.navigation');

const landingPageRevealAnimation = function()
{
    const TL_LadningPage = gsap.timeline();

    TL_LadningPage
    .from('.title_1', {autoAlpha: 0,})
    .to('.title_1',{opacity: 0, display: 'none',})
    .from('.title_2',{autoAlpha: 0,})
    .to('.title_2',{opacity: 0, display: 'none',})
    .from('.title_3',{autoAlpha: 0,})
    .to('.title_3',{position: 'fixed', top: '30px', left: '30px', transform: 'translate(0, 0)', fontSize: '2rem'})
    .from('.backgroundElement_Big',{autoAlpha: 0, x: '-50vw', duration: .5,})
    .from('.backgroundElement_Small',{autoAlpha: 0, x: '-42vw', duration: .8,},'-=.2')
    .from('.imgProfil_Container',{autoAlpha: 0, height: 0, duration: 1.2, ease: 'power3.inOut',},'-=.5')
    .from('.side-text',{autoAlpha: 0,y: 100,},'-=.4')
    .from('.navigationToggle', {autoAlpha: 0,});
}

window.addEventListener('load', landingPageRevealAnimation);

navigationToggle.addEventListener('click', ()=>
{
    navigationToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    if(navigationToggle.classList.contains('active'))
    {
        navigationToggle.innerHTML = 'Close';
    }
    else
    {
        navigationToggle.innerHTML = 'Menu';
    }
});