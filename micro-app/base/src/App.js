import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Base</p>
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
  );
}

export default App;
