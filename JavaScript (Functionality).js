const financeForm = document.getElementById('finance-form');
const expenseChartCanvas = document.getElementById('expenseChart');
let expenseData = {
    'Salary': 0,
    'Groceries': 0,
    'Rent': 0,
    'Entertainment': 0
};

// Initialize the chart using Chart.js
const expenseChart = new Chart(expenseChartCanvas, {
    type: 'pie',
    data: {
        labels: Object.keys(expenseData),
        datasets: [{
            label: 'Expenses',
            data: Object.values(expenseData),
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
        }]
    },
    options: {
        responsive: true
    }
});

// Handle form submission
financeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (type === 'expense') {
        // Add to expense data
        expenseData[category] += amount;
    }

    // Update chart data
    expenseChart.data.datasets[0].data = Object.values(expenseData);
    expenseChart.update();

    // Clear form
    financeForm.reset();
});
