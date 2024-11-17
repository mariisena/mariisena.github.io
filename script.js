document.querySelector('form').addEventListener('submit', function(e) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    if (nome === '' || email === '') {
      e.preventDefault();
      alert('Por favor, preencha todos os campos.');
    }
  });

// Função para destacar o link ativo na barra de navegação conforme a rolagem
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
    }
  });
});

// Função para rolar suavemente até a seção clicada
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
      
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  