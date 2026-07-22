// Abre el panel de búsqueda de la cabecera.
const panelBusqueda=document.querySelector('.search-panel');const botonBusqueda=document.querySelector('.search-open');botonBusqueda.addEventListener('click',()=>{panelBusqueda.classList.toggle('open');botonBusqueda.setAttribute('aria-expanded',panelBusqueda.classList.contains('open'));if(panelBusqueda.classList.contains('open'))document.querySelector('#buscar').focus()});document.querySelector('.search-close').addEventListener('click',()=>panelBusqueda.classList.remove('open'));
// Cambia la imagen principal al seleccionar una miniatura.
const imagenPrincipal=document.querySelector('#mainImage');document.querySelectorAll('[data-image]').forEach(boton=>boton.addEventListener('click',()=>{document.querySelectorAll('[data-image]').forEach(item=>item.classList.remove('selected'));boton.classList.add('selected');imagenPrincipal.src=boton.dataset.image}));
// Muestra la galería en una ventana ampliada.
const lightbox=document.querySelector('.lightbox');document.querySelector('.hero-image').addEventListener('click',()=>{lightbox.querySelector('img').src=imagenPrincipal.src;lightbox.classList.add('open')});lightbox.querySelector('button').addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',evento=>{if(evento.target===lightbox)lightbox.classList.remove('open')});
// Guarda visualmente el juego en la lista de deseos.
document.querySelectorAll('.heart,.carousel article button').forEach(boton=>boton.addEventListener('click',()=>{boton.classList.toggle('active');boton.textContent=boton.classList.contains('active')?'♥':'♡'}));
document.addEventListener('keydown',evento=>{if(evento.key==='Escape'){lightbox.classList.remove('open');panelBusqueda.classList.remove('open')}});
