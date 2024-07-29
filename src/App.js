import { useState } from "react";
import './App.css';

function App() {
  const [mouseposition, setmousepositions] = useState({ left: 0, top: 0 })
  document.addEventListener('mousemove', (e) => {
    setmousepositions({ left: e.pageX, top: e.pageY })
  })

  return (
    <>
      <div className="cursor" style={{ left: mouseposition.left, top: mouseposition.top }}></div>
      <video src={require('./Background video effects HD - No Music - Copyright Free.mp4')} autoPlay={true} ></video>

      <header>
        <div className="menu">
          <i id="logo img" className="fa fa-reorder"></i>
        </div>
        <div className="logo">
          <img id="img" src={require('./Rolls-Royce-Logo-700x394.webp')} alt="" />

        </div>
        <div className="dealer">
          <a href="">Find a dealer</a>
        </div>

        <div id="line"></div>
      </header>

      <main>
        <div className="section">
          <h1>GHOST</h1>
          <h2>PRISM</h2>
          <button>Discover now </button>
        </div>
      </main>


      <div className="page2">
        <div className="bg">
          <img src="https://www.wallpapers13.com/wp-content/uploads/2016/02/Beautiful-Background-Winter-snow-tree-Hd-wallpaper.jpg" alt="" />

        </div>
      </div>

    </>
  );
}

export default App;
