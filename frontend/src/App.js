import './App.css';
import Navbar from './components/Navbar.js';
import Dropzone from './components/Dropzone.js';
import MailsList from './components/MailsList';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Dropzone/>
    </div>
  );
}

export default App;
