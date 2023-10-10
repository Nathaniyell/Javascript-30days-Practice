// Check if the user is connected to the internet
const isOnline = window.navigator.onLine;

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create an error message element
const errorElement = document.createElement("p");
errorElement.textContent = "Please check your internet connection";
errorElement.style.display = "none"; // Initially, hide the error message
rootElement.appendChild(errorElement);

// Add event listeners for online and offline events
window.addEventListener("online", () => {
  errorElement.style.display = "none"; // If the user is online, hide the error message
});

window.addEventListener("offline", () => {
  errorElement.style.display = "block"; // If the user is offline, display the error message
});
