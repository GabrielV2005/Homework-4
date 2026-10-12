const deck = document.querySelector('.deck');


function getCards() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load data.json');
            }
            return response.json();
        })
        .then(data => {
            deck.innerHTML = '';
            displayCards(data);
        })
        .catch(error => {
            console.error('Error loading cards:', error);
            deck.innerHTML = '<p>Unable to load cards. Check the browser console.</p>';
        });
}



function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {

        // Create the main card
        const card = document.createElement('div');
        card.classList.add('card');

        // Create the inside of the card
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        // Create the front of the card
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const image = document.createElement('img');
        image.src = cards[i].image;
        image.alt = cards[i].name;

        cardFront.appendChild(image);

        // Create the back of the card
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const name = document.createElement('h2');
        name.textContent = cards[i].name;

        const type = document.createElement('p');
        type.textContent = 'Type: ' + cards[i].type;

        const hp = document.createElement('p');
        hp.textContent = 'HP: ' + cards[i].HP;

        const description = document.createElement('p');
        description.textContent = cards[i].description;

        cardBack.appendChild(name);
        cardBack.appendChild(type);
        cardBack.appendChild(hp);
        cardBack.appendChild(description);

        // Put the front and back inside the card
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        // Flip the card when clicked
        card.addEventListener('click', function () {
            card.classList.toggle('flipped');
        });

        // Add the finished card to the deck
        deck.appendChild(card);
    }
}


// DO NOT TOUCH (Starts loading the data)
getCards();
