import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Parent project</p>
      <BrowserRouter>
        <Link to="/react">React项目</Link>
        <Link to="/vue">Vue项目</Link>
      </BrowserRouter>
      {/* 路由切换时 应用渲染到这里 */}
      <div id="container"></div>
    </div>
  );
}

export default App;
