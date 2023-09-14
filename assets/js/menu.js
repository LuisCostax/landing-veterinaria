const navToggle = document.querySelector('.header__nav-toggle');
const headerNav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Verificação para menu aberto / fechado
    const hamburgerBars = document.querySelectorAll('.bar');
    hamburgerBars.forEach(bar => {
        if (headerNav.classList.contains('active')) {
            bar.style.backgroundColor = '#ffffff'; // Deixa o hamburguer menu branco quando aberto
        } else {
            bar.style.backgroundColor = '#daac00'; // Cor laranja quando o menu está fechado
        }
    });
});
