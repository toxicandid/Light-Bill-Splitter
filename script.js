document.addEventListener('DOMContentLoaded', () => {
    const billForm = document.getElementById('billForm');
    const numPersonsSelect = document.getElementById('numPersons');
    const personInputsDiv = document.getElementById('personInputs');
    const resultDiv = document.getElementById('result');

    // Function to create input fields for persons
    function createPersonInputs(numPersons) {
        personInputsDiv.innerHTML = ''; // Clear previous inputs
        for (let i = 1; i <= numPersons; i++) {
            const inputDiv = document.createElement('div');
            inputDiv.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = `Days Person ${i} Stayed (max 31):`;
            label.setAttribute('for', `daysPerson${i}`);
            inputDiv.appendChild(label);

            const input = document.createElement('input');
            input.type = 'number';
            input.id = `daysPerson${i}`;
            input.max = 31;
            input.required = true;
            input.placeholder = `Enter days Person ${i} stayed`;
            inputDiv.appendChild(input);

            personInputsDiv.appendChild(inputDiv);
        }
    }

    // Event listener for number of persons change
    numPersonsSelect.addEventListener('change', (event) => {
        const numPersons = parseInt(event.target.value);
        createPersonInputs(numPersons);
    });

    // Event listener for form submission
    billForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get total bill amount
        const totalBill = parseFloat(document.getElementById('totalBill').value);
        const numPersons = parseInt(numPersonsSelect.value);

        let totalDays = 0;
        const daysArray = [];

        // Get days for each person and calculate total days
        for (let i = 1; i <= numPersons; i++) {
            const days = parseInt(document.getElementById(`daysPerson${i}`).value);
            daysArray.push(days);
            totalDays += days;
        }

        // Calculate bill per day
        const billPerDay = totalBill / totalDays;

        // Calculate and display each person's share
        resultDiv.innerHTML = '';
        daysArray.forEach((days, index) => {
            const share = (days * billPerDay).toFixed(2);
            resultDiv.innerHTML += `<p>Person ${index + 1}'s Share: ₹${share}</p>`;
        });
    });
});
