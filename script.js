document.addEventListener("DOMContentLoaded", function() {

    // Opções para o IntersectionObserver
    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Dispara quando 10% do elemento está visível
    };

    // Função callback que será executada
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            // Se o elemento está visível
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Para de observar o elemento após a animação
                observer.unobserve(entry.target);
            }
        });
    }

    // Cria o observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Seleciona todos os elementos que queremos animar
    const sections = document.querySelectorAll('.reveal-section');

    // Coloca o observer para observar cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

});