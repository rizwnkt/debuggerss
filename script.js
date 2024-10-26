






// Select all buttons that should trigger the popup
const buttons = document.querySelectorAll('.div1 button');

// Select the popup element
const popup = document.getElementById('popup');

// Add event listeners to each button to show the popup
buttons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'block';
    });
});

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}




 // Function for "Find!" button
 function findSeat() {
    alert("Finding best available seat...");
}

// Function to display selected seat number
function selectSeat(seatNumber) {
    alert("Seat " + seatNumber + " selected");
}

// Function for "OK" button
function confirmSeats() {
    alert("Seats confirmed!");
}