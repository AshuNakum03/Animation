console.log("hello there!!");
showtxt();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
  let addtxt = document.getElementById("addtxt");
  let addabc = document.getElementById("addbtx");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let myobj = {
    title:addbtx.value,
    txt:addtxt.value
  }
  notesobj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  addbtx.value = "";
  // console.log(notesobj);
  showtxt();
});

function showtxt() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="cardele my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${element.title}</h5>
          <p class= "card-text">${element.txt}</p>
          <button id="${index}" onclick="deletenote(this.id)"class="btn btn-primary">Delete Notes</button>
        </div>
    </div>`;
  });

  let element = document.getElementById("notes");
  if (notesobj.length != 0) {
    element.innerHTML = html;
  } else {
    element.innerHTML = `Nothing to show! Use the "Add Notes" and add notes`;
  }
}

function deletenote(index) {
  console.log("i am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showtxt();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function()
{
  console.log(search.value)
    let inputval = search.value;
     console.log("input event fired",inputval);
     let notecards = document.getElementsByClassName("cardele")
     console.log("cardele", notecards)
     Array.from(notecards).forEach(function(element){ 
        let notetxt = element.getElementsByTagName("p")[0].innerHTML;
        
       if(notetxt.includes(inputval))
       {
           element.style.display = "block";
       }
       else{
           element.style.display = "none"
       }
     })
})
