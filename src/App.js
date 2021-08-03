import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';

// JSX: Javascript XML

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Alokaaaaaaaaaa</h3>
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
      <Footer paginaAtual={'Contato'} count={0} />
    </div>
  );
}

export default App;
