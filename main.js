window.addEventListener('scroll', function() {
    if (typeof this.lastScroll === 'undefined') {
        this.lastScroll = 0;
    }
    
    var navbar = document.getElementById('myNav');
    
    if (window.scrollY > this.lastScroll) {        
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    this.lastScroll = window.scrollY;
});

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('image');
    
    // Aggiungi un listener per l'evento di click all'immagine
    image.addEventListener('click', function(event) {
        // Seleziona direttamente l'elemento dropdown al momento del click
        var dropdown = document.getElementById('dropdown');
        
        // Verifica se il menu a tendina è già visibile
        if (dropdown.classList.contains('show')) {
            // Se è già visibile, nascondilo
            dropdown.classList.remove('show');
        } else {
            // Altrimenti, se è nascosto, mostralo
            dropdown.classList.add('show');
        }
        // Previeni il comportamento predefinito del click sull'immagine
        event.preventDefault();
    });
    
    // Aggiungi un listener per chiudere il menu a tendina quando si fa clic al di fuori di esso
    document.addEventListener('click', function(event) {
        var dropdown = document.getElementById('dropdown');
        if (!dropdown.contains(event.target) && event.target !== image) {
            dropdown.classList.remove('show');
        }
    });
});

function startAnimation() {
    var image = document.getElementById("image");
    var animationInterval = setInterval(function() {
        image.classList.add("pulse-animation");
        setTimeout(function() {
            image.classList.remove("pulse-animation");
        }, 1000); // Durata dell'animazione in millisecondi (2 secondi)
    }, 10000); // Intervallo tra le animazioni in millisecondi (30 secondi)
}

// Avvio dell'animazione quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
    startAnimation();
});

// Funzione per eseguire il contatore
function startCounter() {
    var counterElement = document.getElementById('counter');
    var currentCount = 0;
    var targetCount = 3000;
    var interval = 10; // Intervallo di aggiornamento in millisecondi
    
    var increment = Math.ceil(targetCount / (1000 / interval));
    
    var counterInterval = setInterval(function() {
        currentCount += increment;
        if (currentCount > targetCount) {
            currentCount = targetCount;
            clearInterval(counterInterval);
        }
        counterElement.textContent = currentCount;
    }, interval);
}

// Avvio del contatore quando il documento è pronto
document.addEventListener('DOMContentLoaded', function() {
    startCounter();
});

// Seleziona il bottone
var button = document.getElementById('buttonCard');

// Aggiungi un listener per l'evento di click al bottone
button.addEventListener('click', function() {
    // Seleziona l'elemento della row
    var laRow = document.querySelector('.laRow');
    
    // Se la classe "expanded" è presente, significa che la sezione è aperta
    var isExpanded = laRow.classList.contains('expanded');
    
    // In base allo stato attuale, apri o chiudi la sezione
    if (!isExpanded) {
        // Se la sezione non è aperta, aprila
        laRow.style.overflow = 'visible';
        laRow.style.height = 'auto';
        laRow.classList.add('expanded'); // Aggiungi la classe "expanded" per segnalare che la sezione è aperta
        // Seleziona direttamente l'elemento dropdown al momento del click
        button.textContent = 'Mostra meno';
        var dropdown = document.getElementById('dropdown');
        // Verifica se il menu a tendina è già visibile
        if (!dropdown.classList.contains('show')) {
            // Se è nascosto, mostralo
            dropdown.classList.add('show');
        }
    } else {
        // Altrimenti, chiudila
        laRow.style.overflow = 'hidden';
        if (window.innerWidth <= 576) {
            laRow.style.height = '200px'; // Altezza per schermi stretti
        } else {
            laRow.style.height = '450px'; // Altezza predefinita
        } // O qualsiasi sia l'altezza predefinita
        laRow.classList.remove('expanded'); // Rimuovi la classe "expanded" per segnalare che la sezione è chiusa
        // Seleziona direttamente l'elemento dropdown al momento del click
        button.textContent = 'Mostra di più';
        var dropdown = document.getElementById('dropdown');
        // Verifica se il menu a tendina è già visibile
        if (dropdown.classList.contains('show')) {
            // Se è visibile, nascondilo
            dropdown.classList.remove('show');
        }
    }
});

