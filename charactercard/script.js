// Character card object will have: 
    // name
    // class
    // level
    // health
    // image
    // methods: attacked and level up

// I named this 'dragonCard' instead of just 'card in the case in the future where we add more cards
const dragonCard = {
    name: 'Alpine Dragon',
    class: 'Snow World Boss',
    level: 15,
    health: 200,
    image: 'images/dragon-card.png',
    attacked: function () {
        // subtract 20 from hp
        // if hp is less than or equal to 0, output.textContent died
        this.health = this.health - 20;
        if (this.health <= 0) {
            // I had to look up what makes the popup
            alert("Character Died.")
        }
    },
    levelUp: function () {
        // Adds 1 to the level property value
        // I also decided to have fun and increase the health when it levels up
        this.level++
        this.health = this.health + 20;
    }
};

document.querySelector('.card-img').setAttribute('src', dragonCard.image);
document.querySelector('.card-img').setAttribute('alt', dragonCard.name);

document.querySelector('.name').textContent = dragonCard.name;
document.querySelector('.class').textContent = `Class: ${dragonCard.class}`;
document.querySelector('.level').textContent = `Level: ${dragonCard.level}`;
document.querySelector('.health').textContent = `Health: ${dragonCard.health}`;

// Need to add an event listener for both buttons
const attackedButton = document.querySelector('#attacked-button');
const levelUpButton = document.querySelector('#level-up-button');

// Arrow function
attackedButton.addEventListener('click', () => {
    dragonCard.attacked();
    // I have to refresh/update the info
    document.querySelector('.health').textContent = `Health: ${dragonCard.health}`;
});
levelUpButton.addEventListener('click', () => {
    dragonCard.levelUp();
    // I have to refresh/update the info
    document.querySelector('.level').textContent = `Level: ${dragonCard.level}`;
    document.querySelector('.health').textContent = `Health: ${dragonCard.health}`;
});