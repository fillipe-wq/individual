document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade para o botão 'Explore o Mundo' (na index.html)
    const exploreBtn = document.getElementById('saibaMaisBtn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Rola suavemente para a seção de destaques abaixo do banner
            document.querySelector('.destaques, .conteudo-principal').scrollIntoView({ behavior: 'smooth' });
            
            // Você pode substituir por um alerta simples, se preferir:
            // alert('Boas-vindas ao Geo-Mundo! Explore o menu acima.');
        });
    }

    // 2. Funcionalidade que destaca o link ativo no header
    // Esta função garante que o CSS 'a.active' seja aplicado corretamente em todas as páginas
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // Remove a classe 'active' de todos os links, para limpar qualquer erro
        link.classList.remove('active');
        
        // Se o href do link (ex: "mapas.html") for igual ao arquivo atual
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } 
        
        // Trata o caso especial da página index, se o caminho for vazio ou apenas '/'
        if (currentPath === '' || currentPath === 'index.html') {
             if (link.getAttribute('href') === 'index.html') {
                 link.classList.add('active');
             }
        }
    });

    // 3. Log de inicialização
    console.log("Geo-Mundo: JavaScript e interatividade carregados!");
});
