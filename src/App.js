import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';



function App() {

  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="page-container">
      <Header />

      <CreateArea onAdd={addNote} />

      <div className='row'>
        {notes.map((noteItem, index) => {
          return (
            <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;