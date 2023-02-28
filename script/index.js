// Get the modal
const modal = document.getElementById("signUpModal");

// Get the button that opens the modal
const btn = document.getElementById("signUpBtn");

// Get the <span> element that closes the modal
const closeIcon = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon.onclick = function() {
  modal.style.display = "none";
}