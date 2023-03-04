// ************ Delete Modal ************* 

const deleteIcon = document.getElementsByClassName("deleteIcon")
const deleteModal = document.getElementById("deleteBlog")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const deletePost =() => {
    deleteModal.style.display = "block"
}

// yesBtn.addEventListener = ('click',(event) => {
//     deleteModal.style.display = "none"
// })

const yes = () => {
    deleteModal.style.display = "none"
}
const no = () => {
    deleteModal.style.display = "none"
}