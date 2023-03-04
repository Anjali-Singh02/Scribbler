
//  ******* CREATE POST MODAL ******************
const createmodal = document.getElementById("createModal");

// Get the button that opens the modal
const createBtn = document.getElementById("createPost");

// Get the <span> element that closes the modal
const closeIcon2 = document.getElementById("closeCreate");

// When the user clicks the button, open the modal 
createBtn.onclick = function() {
  createmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon2.onclick = function() {
  createmodal.style.display = "none";
}


