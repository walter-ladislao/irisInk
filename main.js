window.addEventListener('scroll', function() {
    var navbar = document.getElementById('myNav');
    
    if (window.scrollY > this.lastScroll) {        
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    this.lastScroll = window.scrollY;
});
