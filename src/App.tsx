import './App.css';
import { useState } from 'react';

function App() {
  const [prefClick, setPrefClick] = useState(false);


  return (
    <div className="App">
    
      <div className="header">
        <div className="header-inner"></div>

      </div>

      <div className="main">
      
        {(prefClick ? (
          <div className="pref-inner">pref</div>
          ) : (
          <div className="main-inner">
          main
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="footer-inner">

        </div>
      </div>
      
    </div>
  );
}

export default App;
