//whole web page is design on this file
// import logo from './logo.svg';
import './App.css';
//pehle classes based component ka use krte the but ab function based component ka use krte hn.
function App() {
  return (
    /*{ <div className="App">
      <header className="App-header">
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
          Learn React with Harry
        </a>
      </header>
    </div>

  } */ //ye pura jsx hn jo ki html jaisa hn.
    //jsx html aur js ko ek hi jagah likhne  ka platform deta hn.
    //ye syntax extension.
    // kyuki ye jsx html aur js dono ko ek hi jagah likhne ka platform deta hn islye class,for,tabindex ko yha className,htmlFor,tabIndex likhte hn. kyuki class,for js ka reserved words hn.
    //jsx se ek hi tag ko return krta hn islye agr jyda tag return  krna chahte ho to js fragment use kro
  <div id="box">
    <nav>
      <li>
        Home
      </li>
      <li>
        About
      </li>
      <li>
        Contact Us
      </li>
    </nav>
    <body>
      <h1 className="heading">
        Welcome to React JS tutorial
      </h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut laborum distinctio ex ducimus non sequi, culpa quod officiis obcaecati expedita eveniet dolore et odit modi voluptate eius quia quibusdam quo commodi perspiciatis consectetur.
      </p>
    </body>
  </div>
  );
}

export default App;
