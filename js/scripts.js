
// sticky navbar function
(function(){
    const sticky = document.querySelector('.navbar');

    window.addEventListener('scroll', () => sticky.classList.toggle('show', window.scrollY > 0))
})();

