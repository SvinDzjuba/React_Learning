function addNote(newNote) {
    if(newNote.trim() === '') {
        return;
    }
    const container = document.querySelector('.notes_container');
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = newNote;
    container.appendChild(note);
    document.querySelector('#addNote').value = '';
    document.querySelector('.noNotes').style.display = 'none';
}

export default addNote;