const deleteModal = document.getElementById("deleteModal");

// Get the button that opens the modal
const deleteIcon = document.getElementsByClassName("deleteIcon");

// Get the <span> element that closes the modal
const closeIcon2 = document.getElementById("closeCreate");

// When the user clicks the button, open the modal 
deleteIcon.onclick = function() {
  createmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon2.onclick = function() {
  createmodal.style.display = "none";
}