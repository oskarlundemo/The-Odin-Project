import './App.css'
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import {useState} from "react";
import {Customize} from "./components/Customize.jsx";

export const App = () => {

    const [workCards, setWorkCards] = useState([])
    const [educationCards, setEducationCards] = useState([])

    const handleAddWorkCard = (card) => {
        const newWorkCard = {
            id: workCards.length + 1,
            organization: card.organization,
            occupation: card.occupation,
            startdate: card.startdate,
            enddate: card.enddate,
            description: card.description,
        };
        setWorkCards((prevWorkCards) => [...prevWorkCards, newWorkCard]);
    };

    const handleAddEducationCard = (card) => {
        const newEducationCard = {
            id: educationCards.length + 1,
            organization: card.organization,
            occupation: card.occupation,
            startdate: card.startdate,
            enddate: card.enddate,
            description: card.description,
        };
        setEducationCards((prevWorkCards) => [...prevWorkCards, newEducationCard]);
    };


    const deleteWorkCard = (card) => {
        setWorkCards((prevWorkCards) =>
            prevWorkCards.filter((workCard) => workCard.id!== card.id)
        )
    }

    const deleteEducationCard = (card) => {
        setEducationCards((prevEducationCards) =>
            prevEducationCards.filter((educationCard) => educationCard.id!== card.id)
        )
    }

    const workUpdate = (id, updatedCard) => {
        setWorkCards(prevWorkCards =>
        prevWorkCards.map((workCard) =>
            workCard.id === id? {...workCard,...updatedCard} : workCard))
    };

    const educationUpdate = (id, updatedCard) => {
        setEducationCards(prevEducationCard =>
            prevEducationCard.map((educationCard) =>
                educationCard.id === id? {...educationCard,...updatedCard} : educationCard))
    };


    return (
        <div className="app-wrapper">

            <Customize/>

            <NavBar onAddWork={handleAddWorkCard}
                    onUpdateWork={workUpdate}
                    onDeleteWork={deleteWorkCard}

                    onAddEducation={handleAddEducationCard}
                    onDeleteEducation={deleteEducationCard}
                    onUpdateEducation={educationUpdate}
            ></NavBar>



            <main className="main-content">
                <Header/>
                <Section title="Work" sectionCards={workCards}/>
                <Section title="Education" sectionCards={educationCards}/>
            </main>
        </div>
    )
}

export default App
