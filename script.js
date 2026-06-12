// 1. Efeito de sombra no Header ao rolar a página
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
    }
});

// 2. Menu Responsivo (Celular)
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// 3. Controle dos Cards Expansíveis (Segmentos) com Efeito Sanfona
function toggleSegmento(card) {
    const todosOsCards = document.querySelectorAll('.card');
    
    // Fecha todos os outros cards que não foram o clicado agora
    todosOsCards.forEach(item => {
        if (item !== card) {
            item.classList.remove('ativo');
        }
    });

    // Abre ou fecha o card atual
    card.classList.toggle('ativo');
}