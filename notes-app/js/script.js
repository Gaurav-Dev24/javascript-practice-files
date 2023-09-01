// Dom selectors declared
const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// event handler for adding notes
addBtn.addEventListener("click", function () {
  addNote();
});

// logic to save notes
const saveNotes = () => {

  const notes = document.querySelectorAll(".notes textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
//   console.log(data)

if(data.length === 0){
    localStorage.removeItem("notes");
}else{
    localStorage.setItem("notes", JSON.stringify(data));
}

};



//  logic to add notes
const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("notes");
  note.innerHTML = `
    <div class="tool">
        <i class="save fa-regular fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash-can"></i>
    </div>
    <textarea>${text}</textarea>
    `;

// event handler for clicking on delete icon
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

//  event handler for clicking on save icon
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener(
    "focusout   ",
    function(){
        saveNotes();
    }
  )
  main.appendChild(note);
  saveNotes();
};


(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote()
        }else{
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes);
                }
            )
        }
        
    }
)()