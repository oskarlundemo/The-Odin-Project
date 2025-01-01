
import './styles/App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
import {useState} from "react";

function App() {

    const [elements, setElements] = useState([]);

    const addElement = () => {
        const newElement = {
            id: elements.length + 1,
            title: `New Education Card #${elements.length + 1}`,
            organization: 'Uppsala University',
            period: '2024-10-29 / 2025-12-29',
            description: 'Description of the program',
        };
        setElements([...elements, newElement]);
    };


  return (
      <>
          <Header/>
          <Main elements={elements}/>
          <SideBar onAddElement={addElement}/>
      </>
  )
}

export default App
