// ***********  Get the modal signup modal ***************
const modal = document.getElementById("signUpModal");
// Get the button that opens the modal
const signUpbtn = document.getElementById("signUpBtn");
// Get the <span> element that closes the modal
const closeIcon = document.getElementById("closeSignUp");

// When the user clicks the button, open the modal 
signUpbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon.onclick = function() {
  modal.style.display = "none";
}


// ***********  Get the modal signIn modal ***************
const modal1 = document.getElementById("signInModal");
// Get the button that opens the modal
const signInbtn = document.getElementById("signInBtn");
// Get the <span> element that closes the modal
const closeIcon1 = document.getElementById("closeSignIn");

// When the user clicks the button, open the modal 
signInbtn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeIcon1.onclick = function() {
  modal1.style.display = "none";
}



const signUpModal = () => {
    modal1.style.display = "none";
    modal.style.display = "block";
}