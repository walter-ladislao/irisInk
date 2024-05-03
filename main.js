// CODICE DELLA NAVBAR CHE VA SU QUANDO SI SCROLLA GIÙ
window.addEventListener('scroll', function() {
    if (typeof this.lastScroll === 'undefined') {
        this.lastScroll = 0;
    }
    
    let navbar = document.getElementById('myNav');
    
    if (window.scrollY > this.lastScroll) {        
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    this.lastScroll = window.scrollY;
});

// CODICE DELL'UPLOGO CHE SE LO CLICCHI ESCE IL DROPDOWN
document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('image');
    
    
    image.addEventListener('click', function(event) {
        
        let dropdown = document.getElementById('dropdown');
        
        
        if (dropdown.classList.contains('show')) {
            
            dropdown.classList.remove('show');
        } else {
            
            dropdown.classList.add('show');
        }
        
        event.preventDefault();
    });
    
    
    document.addEventListener('click', function(event) {
        let dropdown = document.getElementById('dropdown');
        if (!dropdown.contains(event.target) && event.target !== image) {
            dropdown.classList.remove('show');
        }
    });
});

// CODICE ANIMAZIONE UPLOGO
function startAnimation() {
    let image = document.getElementById("image");
    let animationInterval = setInterval(function() {
        image.classList.add("pulse-animation");
        setTimeout(function() {
            image.classList.remove("pulse-animation");
        }, 1000); //millisecondi (2 secondi)
    }, 10000); //millisecondi (30 secondi)
}

// Avvio dell'animazione quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
    startAnimation();
});

// Funzione per eseguire il contatore
function startCounter() {
    let counterElement = document.getElementById('counter');
    let currentCount = 0;
    let targetCount = 3000;
    let interval = 10; // Intervallo di aggiornamento in millisecondi
    
    let increment = Math.ceil(targetCount / (1000 / interval));
    
    let counterInterval = setInterval(function() {
        currentCount += increment;
        if (currentCount > targetCount) {
            currentCount = targetCount;
            clearInterval(counterInterval);
        }
        counterElement.textContent = currentCount;
    }, interval);
}
// AVVIO DEL COUNTER APPENA SI CARICA IL DOCUMENTO
document.addEventListener('DOMContentLoaded', function() {
    startCounter();
});

//  SEZIONE OVERFLOW
let button = document.getElementById('buttonCard');

button.addEventListener('click', function() {
    let laRow = document.querySelector('.laRow');
    let isExpanded = laRow.classList.contains('expanded');
    
    
    if (!isExpanded) {
        laRow.style.overflow = 'visible';
        laRow.style.height = 'auto';
        laRow.classList.add('expanded');        
        button.textContent = 'Mostra meno';
        let dropdown = document.getElementById('dropdown'); 
        if (!dropdown.classList.contains('show')) {            
            dropdown.classList.add('show');
        }
    } else {        
        laRow.style.overflow = 'hidden';
        if (window.innerWidth <= 768) { //The read-only Window property innerWidth returns the interior width of the window in pixels (that is, the width of the window's layout viewport). That includes the width of the vertical scroll bar, if one is present.
            laRow.style.height = '200px'; 
        } else {
            laRow.style.height = '450px'; 
        } 
        laRow.classList.remove('expanded'); 
        
        button.textContent = 'Mostra di più';
        let dropdown = document.getElementById('dropdown');
        
        if (dropdown.classList.contains('show')) {
            
            dropdown.classList.remove('show');
        }
    }
});

