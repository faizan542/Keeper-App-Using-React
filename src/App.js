import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
        <Header />
        <Notes />

      <Footer />

    </div>
  );
}

export default App;