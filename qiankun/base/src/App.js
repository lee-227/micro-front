import logo from './logo-base.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Base Project</p>
          <div>
            <a className='App-link' href='/react'>
              React-child
            </a>
            <a className='App-link' href='/vue'>
              Vue-child
            </a>
          </div>
        </header>
      </div>
      <div id='app-container'></div>
    </>
  );
}

export default App;
