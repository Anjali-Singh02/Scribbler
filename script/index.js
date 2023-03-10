
//  ******* CREATE POST MODAL ******************
var createmodal = document.getElementById("createModal");

// Get the button that opens the modal
var createBtn = document.getElementById("createPost");

// Get the <span> element that closes the modal
var closeIcon2 = document.getElementById("closeCreate");

// When the user clicks the button, open the modal 
createBtn.onclick= () => {
  createmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon2.onclick= () => {
  createmodal.style.display = "none";
}


