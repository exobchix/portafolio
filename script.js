// Efecto de typing para el header
const typeWriter = async (element, text, speed = 100) => {
    element.textContent = '';

    for (let char of text) {
        element.textContent += char;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};

// Función para cambiar de tema
const initThemeToggle = () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon('light');
    } else {
        updateThemeIcon('dark');
    }
    
    // Event listener para el botón
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        updateThemeIcon(isDarkMode ? 'light' : 'dark');
    });
};

// Actualizar icono del tema
const updateThemeIcon = (nextTheme) => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('.theme-icon');
    
    if (nextTheme === 'light') {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
};

// Función para inicializar el menú hamburguesa
const initMenuToggle = () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');
    
    // Toggle del menú
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
};

// Ejecutar el efecto de typing cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar tema
    initThemeToggle();
    
    // Inicializar menú hamburguesa
    initMenuToggle();
    
    const h1Elements = document.querySelectorAll('header h1');

    if (h1Elements.length >= 2) {
        // Primer h1: "Hola 👋 soy"
        await typeWriter(h1Elements[0], 'Hola 👋 soy', 100);

        // Pequeña pausa entre los dos h1s
        await new Promise(resolve => setTimeout(resolve, 500));

        // Segundo h1: "Hector René Bautista Odilón"
        await typeWriter(h1Elements[1], 'Hector René Bautista Odilón', 80);
    }
});
