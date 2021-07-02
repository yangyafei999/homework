import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          我 <code>爱你</code> 祖国!!
        </p>
        <a
          className="App-link"
          href="https://baike.baidu.com/item/%E5%BA%86%E7%A5%9D%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E6%88%90%E7%AB%8B100%E5%91%A8%E5%B9%B4/55757846?fr=aladdin"
          rel="noopener noreferrer"
        >
          加油！
        </a>
      </header>
    </div>
  );
}

export default App;
