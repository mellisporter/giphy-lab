import logo from './logo.svg';
import './App.css';

// imports
import DogDisplay from './components/DogDisplay';
import Form from "./components/Form"
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
       <DogDisplay/>
       <Form/>
    </div>

  );
}

export default App;
