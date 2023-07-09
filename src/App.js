import React from "react"
import './App.css';
import Nav from './Components/nav/Nav'
import Bio from './Components/bio/Bio'
import Projects from './Components/projects/Projects'

class App extends React.Component {
  render() {
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
