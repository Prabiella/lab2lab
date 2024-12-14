document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.form-select');
    const insCards = document.querySelectorAll('.ins-card');
  
    if (!select || insCards.length === 0) {
        console.error('No se encontró el select o no hay ins-cards disponibles.');
        return;
    }
  
    select.addEventListener('change', () => {
        const selectedOption = select.options[select.selectedIndex];
        const selectedId = selectedOption.getAttribute('data-id'); 
  
        insCards.forEach(card => {
            const cardParagraph = card.querySelector('p'); 
            const cardId = cardParagraph.id;
  
            if (cardId === selectedId || selectedId === null) {
                card.style.removeProperty('display'); 
            } else {
                card.style.setProperty('display', 'none', 'important');
            }
        });
    });
  });
  