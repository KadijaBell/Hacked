import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [state, setState] = useState([]);

  useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/api/post-list/')
    .then(res => res.json())
    .then(res => {
      setState(res)
      return res
    }).then(res => console.log(res))
  }, []) 

  return (
    <div className='App'>
      <header className="App-header">
        <h1>Welcome to Hacked!</h1>
      </header>
      <div id='App'></div>
    </div>

  );
}

export default App;
