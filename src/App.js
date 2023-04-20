import React from 'react';
import Quotes from './Quotes';
import './App.css';
import './header';
import Header from './header';
import Footer from './footer';
import Contact from './contact';


function App() {
  return (
    <div className="App">
      <Header />
        <h3> Start everyday with a with something that makes you go beyond limits, i hope this quote generator would do it</h3>
  
      <Quotes />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;





// import './App.css';
// import React,{useState,useEffect} from 'react';

// export default function App() {

//  return (
//       <div class="container">
//         <h1>Random Quote Machine</h1>
//         <div class="wrapper" id="quote-box">
//           <h2 id="text">{quote.quote}</h2>
//           <br />
//           <div>
//           <h3 id="author">{quote.name}</h3>
//           </div>
//         <div>
//         <button id="twitter">
//           <a id="tweet-quote" 
//             target="_blank" rel="noreferrer"     
//             href="http://twitter.com/intent/tweet">
//            <i class="fab fa-twitter"></i>
//           </a>
//         </button>
//         <button id="timblr">
//           <a href="https://www.tumblr.com" rel="noreferrer">
//             <i class="fab fa-tumblr"></i>
//           </a>
//         </button>
//         <button id="new-quote" onClick={generateQuote}>Next Quote</button>
//         </div>
//         </div>
//       </div>
//     )
// }



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
