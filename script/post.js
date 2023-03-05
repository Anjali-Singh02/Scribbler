



const addComments = (id) => {
    let addEventName = id.value + '<br>';
    let a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>' + addEventName + '</p>';
    a.value = a.defaultValue;
}


let numberOfClicks = 0;
const likePost = () => {
    document.getElementById("likePost").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="likeIcon" aria-hidden="true">
    <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
  </svg> ` + " Liked";
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        if (numberOfClicks == 1) {
            document.getElementById("likeCount").innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById("likeCount").innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}
// ******* Edit button ********* 
let click = true

const editBtn = document.getElementById('editBtn')
const changeText = () => {
  
    if(click == true ) {
        editBtn.innerHTML = `Save <i class="fa-solid fa-floppy-disk" id = "save"></i>`
        click = false
    }
    else {
    editBtn.innerHTML = `Edit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
    fill="currentColor" class="editIcon">
    <path
        d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
    <path
        d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
</svg>`

}
}
