window.onload=function() {
    console.log(localStorage.getItem('title'))
    console.log(localStorage.getItem('userName'))
    console.log(localStorage.getItem('content'))
    document.getElementById("title").innerText=localStorage.getItem('title')
    document.getElementById("userName").innerText=localStorage.getItem('userName')
    document.getElementById("content").innerText=localStorage.getItem('content')
}
const title = document.getElementById('title');
const content = document.getElementById('content');
const flag = false;
const counter = 0;
const btn=document.getElementById('editBtn');
function edit(){
    let help=false;
    counter++;
    if(!flag){
        flag=true;
        help=true
        title.contentEditable=true;
        content.contentEditable=true;
        title.setAttribute('id','editingTitle')
        content.setAttribute('id','editingContent')
        btn.innerHTML=`Save<i class="fa-solid fa-save" id='editIcon'></i>`;
    }else{
            if(counter==2){
                title.setAttribute('id','title')
                content.setAttribute('id','content')
                title.innerHTML=`<p>UPDATED:</p>${title.innerHTML}`;
                content.innerHTML=`<p>UPDATED:</p>${content.innerHTML}`;
                btn.innerHTML=`Edit<i class="fa-solid fa-pen-to-square" id='editIcon'></i>`;
            }else{
                title.setAttribute('id','title')
                content.setAttribute('id','content')
                title.innerHTML=`${title.innerHTML}`;
                content.innerHTML=`${content.innerHTML}`;
                btn.innerHTML=`Edit<i class="fa-solid fa-pen-to-square" id='editIcon'></i>`;
            }
    }
    if(!help){
        flag=false;
    }
}
var likeBtn=document.getElementById('likeBtn');
var likeCounter=0;
function like(){
        likeCounter++;
        document.getElementById('likeBtn').innerHTML=`<i class="fa-solid fa-thumbs-up" id="likeIcon"></i>Liked`;
        document.getElementById('likePrompt').innerHTML=`${likeCounter} person likes this!`
}
var getCmnt=document.getElementById('commentBox');
var cmntList = document.getElementById('cmntList');
function cmntStore(){
    if(getCmnt.value!==""){
        cmntList.innerHTML += `<p id='cmntContent'>${getCmnt.value}</p>`
        getCmnt.value=``;
    }
}