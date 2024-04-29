window.addEventListener('scroll', function() {
    var navbar = document.getElementById('myNav');
    // Verifica se lo scrolling è verso il basso
    if (window.scrollY > this.lastScroll) {
        // Nascondi la navbar spostandola verso l'alto
        navbar.style.top = '-100px'; // Modifica il valore in base all'altezza della tua navbar
    } else {
        // Mostra la navbar spostandola verso il basso
        navbar.style.top = '0';
    }
    // Salva l'ultima posizione dello scrolling
    this.lastScroll = window.scrollY;
});
