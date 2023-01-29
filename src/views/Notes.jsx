import React, { useState } from 'react';
import '../css/App.css';
import addNote from '../components/AddNote';

const Notes = () => {
    let [newNote, setNewNote] = useState('');

    return (
        <div className="NotesPage">
            <div className="input_container">
                <input 
                    type="text" 
                    id="addNote"
                    placeholder='Add a note...' 
                    value={newNote}
                    onChange={e => setNewNote(e.target.value)}
                />
                <button onClick={() => addNote(newNote)}>Add</button>
            </div>
            <div className="notes_container">
                <p className="noNotes">Notes will be posted here in the future!</p>
            </div>
        </div>
    );
}

export default Notes;