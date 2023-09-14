// Get the elements
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

// Initialize the counter value
let count = parseInt(countElement.textContent);

// Add click event listeners
decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
});

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
}); 