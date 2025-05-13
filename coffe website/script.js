const coffeeMenu = [
    { name: "Espresso", price: "$3.00" },
    { name: "Latte", price: "$4.00" },
    { name: "Cappuccino", price: "$4.50" },
    { name: "Mocha", price: "$5.00" },
    { name: "Americano", price: "$3.50" },
  ];
  
  const menuContainer = document.getElementById("coffee-menu");
  
  coffeeMenu.forEach(coffee => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.innerHTML = `
      <h3>${coffee.name}</h3>
      <p>Price: ${coffee.price}</p>
      <button onclick="alert('Added ${coffee.name} to cart!')">Add to Cart</button>
    `;
    menuContainer.appendChild(item);
  });
  
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });
  