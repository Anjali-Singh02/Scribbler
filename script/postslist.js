// ************ Delete Modal ************* 

const deleteIcon = document.getElementsByClassName("deleteIcon")
const deleteModal = document.getElementById("deleteBlog")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const deletePost =(post1) => {
    deleteModal.style.display = "block"
    console.log(post1)
}

const no = () => {
    deleteModal.style.display = "none"
}

//  Post List function

var id="";
const setId = (htmlId) =>{
    deleteModal.style.display="block";
    id=htmlId;
}
const yes = () => {
    deleteModal.style.display="none";
    document.getElementById(id).style.display="none";
}
const settingContentOfId = (getUser,getTitle,getContent) => {
    let userName=document.getElementById(getUser).innerText;
    localStorage.setItem('userName',userName);
    let titleOfPost=document.getElementById(getTitle).innerText;
    localStorage.setItem('title',titleOfPost);
    let contentOfPost=document.getElementById(getContent).innerText;
    localStorage.setItem('content',contentOfPost);
}