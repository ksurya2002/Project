

let myform = document.getElementById("myform");
let myinput = document.getElementById("myinput");
let mysubmit = document.getElementById("mysubmit");
let mydate= document.getElementById("mydate");



myform.addEventListener("submit",
    (data) => {
        data.preventDefault();
        createItem(myinput.value,mydate.value)

    });

function deleteItem(d) {
    d.parentElement.remove()
}
function editItem(e) {
    const li = e.parentElement;
    const edit = (myinput.value);
    li.firstChild.textContent=edit;
}
createItem = (v,date)  => {

    let template = `<ul><li>${v}-${date}<br><button class="edit" onclick="editItem(this)">Edit</button>
    <button class="delete" onclick="deleteItem(this)">Delete</button></li></ul>`;
    mylist.insertAdjacentHTML("beforeend", template);
    myinput.value = "";
    mydate.value = "";
    //  myinput.focus();
   // mysubmit.disabled = true;


}
// myinput.addEventListener("input", function button() {
//     if (myinput.value.trim() === "") {
//         mysubmit.disabled = true;
//     }
//     else if (myinput.value.trim() !== "") {
//         mysubmit.disabled = false;
//     }

// });
