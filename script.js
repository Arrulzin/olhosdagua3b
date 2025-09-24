    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    // Quiz Interativo
    function checkAnswer(element, tipo) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(opt => { opt.style.backgroundColor = ''; opt.style.color = ''; });

        if (tipo === 'correta') {
            element.style.backgroundColor = '#4CAF50';
            element.style.color = 'white';
            setTimeout(() => alert('Resposta correta! 🎉 O conto explora profundamente a ancestralidade africana.'), 500);
        } else {
            element.style.backgroundColor = '#f44336';
            element.style.color = 'white';
            setTimeout(() => alert('Tente novamente! 💡 Pense na relação com as raízes africanas.'), 500);
        }
    }