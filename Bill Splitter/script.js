document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate");

    calculateBtn.addEventListener("click", function () {
        const bill = parseFloat(document.getElementById("billAmount").value);
        const people = parseInt(document.getElementById("peopleCount").value);
        const tip = parseFloat(document.getElementById("tipPercent").value) || 0;

        if (isNaN(bill) || isNaN(people) || people <= 0) {
            alert("Please enter valid bill amount and number of people.");
            return;
        }

        const tipAmount = bill * (tip / 100);
        const totalBill = bill + tipAmount;
        const totalPerPerson = totalBill / people;

        document.getElementById("total-per-person").textContent = "RS" + totalPerPerson.toFixed(2);
    });
});