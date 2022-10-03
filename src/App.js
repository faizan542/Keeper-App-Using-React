import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import Footer from './components/Footer';
import notes from './JS_file/notes';




function App() {
  return (
    <div className="page-container">
      <Header />
      <div className='row'>
        {notes.map(noteItem => {
          return (
            <Notes key={noteItem.key} title={noteItem.title} content={noteItem.content} />
          )
        })}
    </div>
        <Footer />
      </div>
  );
}

export default App;