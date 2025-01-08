import './App.css'
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import {useContext, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";

export const App = () => {


    const { experienceInfo: input} = useContext(AppContext);

    const [workCards, setWorkCards] = useState([])
    const [educationCards, setEducationCards] = useState([])

    const handleAddWorkCard = () => {
        const newWorkCard = {
            id: workCards.length + 1,
            organization: input.organization,
            occupation: input.occupation,
            startdate: input.startdate,
            enddate: input.enddate,
            description: input.description,
        };

        setWorkCards((prevWorkCards) => [...prevWorkCards, newWorkCard]);
    };

    const handleAddEducationCard = () => {
        const newEducationCard = {
            id: educationCards.length + 1,
            organization: input.organization,
            occupation: input.occupation,
            startdate: input.startdate,
            enddate: input.enddate,
            description: input.description,
        };

        setEducationCards((prevEducationCards) => [...prevEducationCards, newEducationCard]);
    };


    const handleExperienceChange = (id, card) => {
        setWorkCards((prewWorkCards) =>
        prewWorkCards.map((workCard) => card.id === id ? {...workCard,...card} : workCard))
    };




    return (
            <div className="app-wrapper">
                <NavBar onAddWork={handleAddWorkCard} onAddEducation={handleAddEducationCard}></NavBar>
                <main className="main-content">
                    <Header/>
                    <Section title="Work" sectionCards={workCards}/>
                    <Section title="Education" sectionCards={educationCards}/>
                </main>
            </div>
  )
}

export default App
