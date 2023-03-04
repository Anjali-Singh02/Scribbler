// ************ Delete Modal ************* 

const deleteIcon = document.getElementsByClassName("deleteIcon")
const deleteModal = document.getElementById("deleteBlog")

deleteIcon.addEventListener("click", (event) => { 
deleteModal.style.display = block;
})