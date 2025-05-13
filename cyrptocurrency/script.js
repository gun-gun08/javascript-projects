const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

async function fetchCryptoData() {
  const res = await fetch(API_URL);
  const data = await res.json();
  displayData(data);
}

function displayData(coins) {
  const container = document.querySelector('#crypto-container');
  container.innerHTML = '';

  coins.forEach(coin => {
    container.innerHTML += `
      <div class="coin">
        <img src="${coin.image}" alt="${coin.name}" />
        <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
        <p>Price: $${coin.current_price}</p>
        <p>Change (24h): ${coin.price_change_percentage_24h.toFixed(2)}%</p>
      </div>
    `;
  });
}

setInterval(fetchCryptoData, 5000); // Updates every 5 seconds
