document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const daysPersonA = parseInt(document.getElementById('daysPersonA').value);
    const daysPersonB = parseInt(document.getElementById('daysPersonB').value);

    // Calculate total days
    const totalDays = daysPersonA + daysPersonB;

    // Calculate share per day
    const billPerDay = totalBill / totalDays;

    // Calculate individual shares
    const personAShare = billPerDay * daysPersonA;
    const personBShare = billPerDay * daysPersonB;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Person A's Share: ₹${personAShare.toFixed(2)}</p>
        <p>Person B's Share: ₹${personBShare.toFixed(2)}</p>
    `;
});
