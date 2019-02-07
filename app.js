window.onload = () => {

    if (JSON.parse(sessionStorage.getItem('notesList'))) {

        const ul = document.createElement('ul');//creates a UL for notes;
        notes !== null && console.log('you still have recoverable notes');
        const notesArray = Object.values(JSON.parse(sessionStorage.getItem('notesList')));

        document.getElementById('renderNotes').appendChild(ul);
        notesArray.forEach(renderNotes);


        console.log('no list items detected, creating a new ul');

        function renderNotes(element) {
            let li = document.createElement('li');
            ul.setAttribute('id', 'ul');
            ul.appendChild(li);
            li.innerHTML = li.innerHTML + element;
            li.className = "reminder";
        }
    }
};


const
    nuke = document.getElementById('nuke'),
    add = document.getElementById('add');


let notes = JSON.parse(sessionStorage.getItem('notesList'));

add.onclick = function () {
    addLi();

};

function addLi() {
    const noteContent = document.getElementById('textArea').value,
        ul = document.createElement('ul');//creates a UL for notes;


    if (noteContent.length === 0) {
        alert('you did not enter a reminder');
        return false;
    }

    //add new note to list of notes

    if (notes === null) {
        notes = []
    }

    notes.push(noteContent);
    console.log('notes', notes);

    //add all notes to storage in string format
    sessionStorage.setItem("notesList", JSON.stringify(notes));

    //get all notes from storage and transform them to an array
    const notesArray = Object.values(JSON.parse(sessionStorage.getItem('notesList')));
    console.log('notes array', notesArray);


    console.log('number of lis', document.getElementById('renderNotes').getElementsByTagName('li').length);


    if (document.getElementById('renderNotes').getElementsByTagName('li').length === 0) {
        document.getElementById('renderNotes').appendChild(ul);
        notesArray.forEach(renderNotes);


        console.log('no list items detected, creating a new ul');

        function renderNotes(element) {
            let li = document.createElement('li');
            ul.setAttribute('id', 'ul');
            ul.appendChild(li);
            li.innerHTML = li.innerHTML + element;
            li.className = "reminder";
        }


    } else {
        console.log('list of items exists');
        let li = document.createElement('li');
        document.getElementById('ul').appendChild(li);
        li.innerHTML = li.innerHTML + noteContent;
        li.className = "reminder";
    }
    document.getElementById('textArea').value = "";
}


nuke.onclick = function () {
    console.log('engage nuke');
    notes = [];
    sessionStorage.setItem("notesList", null);
    document.getElementById('renderNotes').innerHTML = '';
    document.getElementById('textArea').innerHTML = "";

};

window.onunload = function () {
    console.log('window refreshed')
};