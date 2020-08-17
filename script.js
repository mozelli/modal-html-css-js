// Get modal element
const modal = document.getElementById("modal");

// Get open modal button element
const button = document.getElementById("button");

// Get close button element
const close = document.getElementById("closeButton")

// Listen for click to open modal
button.addEventListener("click", openModal);

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Listen for click to close modal
close.addEventListener("click", closeModalOnClickInCloseButton);

// Function to close the modal
function closeModalOnClickInCloseButton() {
    modal.style.display = "none";
}

// Listen outside click to close modal
window.addEventListener("click", closeModalOnClickOutside);

// Function to close the modal on click outside
function closeModalOnClickOutside(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}