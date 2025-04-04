import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <div>Electron+React, Hellow World</div><br/> 
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
        <p>App.js수정하고 저장하면 바로 화면 반영됨.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a><br/>
        <button onClick={()=>{ window.close(); }}>Exit App</button>
      </header>
    </div>
  );
}

export default App;
