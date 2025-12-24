document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const inputField = document.querySelector('#input-area input');
  const sendButton = document.querySelector('#input-area button');

  const secciones = {
    sobreMi: [
      { texto: "Me apasiona la tecnología y resolver problemas con código.\nSoy alguien curioso, constante y con muchas ganas de crecer dentro de un equipo de desarrollo." },
      { titulo: "Habilidades Blandas", texto: "- Comunicación efectiva\n- Resolución de problemas\n- Trabajo en equipo" }
    ],

    experiencia: [
      { texto: "He trabajado en varios proyectos personalesdonde usé PHP, JavaScript y SQL Server.\nAunque no tengo experiencia laboral en Software aún, estoy listo para aportar y seguir aprendiendo." },
      { titulo: "Trabajo n°1", subtitulo: "Cargo: Junior Dev", texto: "Mantenimiento de Servicios y Landing Pages", detalle: "Referencia: 999 999 999" }
    ],

    proyectos: [
      { texto: "He desarrollado:"},
      { link: "index.html", titulo: "Chat Portafolio", subtitulo: "HTML - CSS - JS", detalle: "Diseño responsivo, interfaz amigable, simulación de chat." }
    ],

    formacion: [
      {texto: "Mi formación académica y certificaciones:" },
      { titulo: "Universidad", subtitulo: "Año - Carrera", detalle: "En curso" },
      { titulo: "Tecnologías y Desarrollo de Software", subtitulo: "2024", detalle: "Certificación completada" },
      { titulo: "Inglés", subtitulo: "B1 - ISIL", detalle: "Nivel intermedio" }
    ],
    
    habilidades: [
      { texto: "Estas son las tecnologías con las que me sientomás cómodo:"},
      { titulo: "Skills Técnicas", subtitulo: "Lenguajes y Tecnologías Web", detalle: "- HTML\n- CSS\n- JavaScript\n- PHP\n- C#" },
      { subtitulo: "Bases de Datos", detalle: "- SQL Server" },
      { subtitulo: "Herramientas de Desarrollo", detalle: "- GitHub\n- Visual Studio Code\n- Visual Studio" },
      { subtitulo: "Otros", detalle: "Node-RED" },
      { titulo: "Habilidades Gráficas", subtitulo: "Software", detalle: "-Figma\n -Adobde Xd" },
      { subtitulo: "Áreas de Diseño", detalle: "-Diseño UX/UI \n-Wireframes Figma \n-Wordpress Elementor" }
    ],
    
    contacto: [
      { titulo: "Contacto", subtitulo: "¿Hablamos?" },
      { titulo: "Correo Electrónico", subtitulo: "contacto@gmail.com", detalle: "Email", link: "mailto:contacto@gmail.com" },
      { titulo: "LinkedIn", subtitulo: "Wilmer C.", detalle: "Perfil profesional", link: "https://https://www.linkedin.com/in/uwil/" },
      { titulo: "GitHub", subtitulo: "uwiloper", detalle: "Repositorios y código", link: "https://github.com/uwiloper" },
      { titulo: "Instagram", subtitulo: "@Uwil", detalle: "Perfil visual", link: "https://www.instagram.com/wilcsmre/" }
    ]
  };

  const botones = document.querySelectorAll('#main-buttons button');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const seccion = boton.dataset.section;
      if (secciones[seccion]) {
        limpiarBurbujas();
        escribirSecuencia(secciones[seccion]);
      }
    });
  });
  
  function limpiarBurbujas() {
    main.innerHTML = '';
  }

  function escribirSecuencia(burbujas) {
    let delay = 0;
    burbujas.forEach(burbuja => {
      setTimeout(() => escribirBurbujaConAnimacion(burbuja), delay);
      const textoTotal = [burbuja.titulo, burbuja.subtitulo, burbuja.texto, burbuja.detalle]
        .filter(Boolean).join(' ').length;
      delay += Math.min(textoTotal * 25, 3000);
    });
  }

    function escribirBurbujaConAnimacion({ titulo, subtitulo, texto, detalle, link }) {
    const burbuja = document.createElement('div');
    burbuja.classList.add('bubble');

    if (titulo) {
      const h4 = document.createElement('h4');
      h4.textContent = titulo;
      burbuja.appendChild(h4);
    }

    if (subtitulo) {
      const h5 = document.createElement('h5');
      if (link) {
        const a = document.createElement('a');
        a.href = link;
        a.target = '_blank';
        a.textContent = subtitulo;
        a.style.color = 'white';
        a.style.textDecoration = 'underline';
        h5.appendChild(a);
      } else {
        h5.textContent = subtitulo;
      }
      burbuja.appendChild(h5);
    }
    if (texto) {
      const p = document.createElement('p');
      p.textContent = '';
      burbuja.appendChild(p);
      animarEscritura(p, texto);
    }

    if (detalle) {
      const small = document.createElement('small');
      small.textContent = detalle;
      burbuja.appendChild(small);
    }

    main.appendChild(burbuja);
    main.scrollTop = main.scrollHeight;
  }

  function animarEscritura(elemento, texto, i = 0) {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      setTimeout(() => animarEscritura(elemento, texto, i + 1), 10); //Velocidad del texto
    }
  }

  /*
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  */

  escribirSecuencia([
    { titulo: "¡Hola!", texto: "Este es un Portafolio Estilo Chat" },
    { texto: "Bienvenido a mi primer proyecto.\nSoy un Desarrollador junior con interés de crecer profesionalmente." },
    { texto: "Elige una opción para comenzar" }
  ]);
});
