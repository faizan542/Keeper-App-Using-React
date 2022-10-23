import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpended, setExpended] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    function expand() {
        setExpended(true);
    }

    return (
        <div>
            <form >
                {isExpended && <input type="text" name="title" placeholder='Title' onChange={handleChange} value={note.title} />}
                <textarea onClick={expand} name="content" placeholder='Take a note...' rows={isExpended ? 3 : 1} onChange={handleChange} value={note.content}></textarea>
                <Zoom in={isExpended}>
                    <Fab className='button' onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea