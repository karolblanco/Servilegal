window.sr= ScrollReveal();

sr.reveal('#nav',{
  duration: 2000,
  origin: 'bottom'
});

sr.reveal('.info-left',{
  duration: 2000,
  origin: 'top',
  // distance:'300px'
});

sr.reveal('.info-right',{
  duration: 2000,
  origin: 'top',

});
sr.reveal('#boton_personalizadob',{
  duration: 2000,
  origin: 'bottom',
  delay: 1000
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
