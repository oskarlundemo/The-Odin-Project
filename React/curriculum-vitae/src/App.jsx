import './App.css'
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
function App() {

  return (
            <div className="app-wrapper">
                <NavBar/>
                <main className="main-content">
                    <Header/>
                    <Section title ="Work"/>
                    <Section title = "Education"/>
                </main>
            </div>
  )
}

export default App
