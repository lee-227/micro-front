import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Base Project</p>
        </header>
      </div>
      <div id='app-container'></div>
    </>
  );
}

export default App;
