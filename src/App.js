// import logo from './logo.svg';
import './App.css';
// import MyButton from './Components/MyButton'
import Nav from './Components/nav/Nav'
import Bio from './Components/bio/Bio'
import Projects from './Components/projects/Projects'
// import Table from './Components/table/Table'
import React from "react"
// import logo from './images/pngwing.com.png'

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   )
// }


// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       Hello World!!!12312
//       <MyButton message={'Hello World!'}/>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <body>
        <Nav />
        <Bio />
        <Projects />
        {/* <img src={logo} alt={"logo"}/>  */}
        {/* <p>Hello world!</p>
        <MyButton message={'Hello World!'}/>
        <Table characterData={characters} /> */}
      </body>
    );
  }
}

export default App;
