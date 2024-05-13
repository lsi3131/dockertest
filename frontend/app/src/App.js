import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
  const [data, setData] = useState('')

  const work = () => {
      setData('')
      const url = ""
      try {
          const response = axios.get(url)
      } catch (error) {
          console.error('Error during signup:', error.response.data.error)
      }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
