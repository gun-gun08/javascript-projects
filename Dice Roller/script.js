const diceImages = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
];

function rollDice() {
  const dice = document.getElementById("dice");
  dice.classList.add("rolling");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    dice.src = diceImages[randomIndex];
    dice.classList.remove("rolling");
  }, 500);
}