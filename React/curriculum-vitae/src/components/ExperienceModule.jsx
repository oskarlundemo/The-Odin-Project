
import React, {useState} from 'react';
import {ExperienceCard} from "./ExperienceCard.jsx";
import '../styles/ExperienceModule.css'




export const ExperienceModule = ({title, svg, onAddExperience, onUpdateExperience, onDeleteExperience}) => {

    const [experienceCards, setExperienceCards] = useState([]);

    const handleButtonClick = () => {
        const newExperienceCard = {
            id: experienceCards.length + 1,
            organization: "",
            occupation: "",
            startdate: "",
            enddate: "",
            description: "",
        };

        setExperienceCards([...experienceCards, newExperienceCard]);
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleModule = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    const handleCardChange = (id, updatedCard) => {
        setExperienceCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, ...updatedCard } : card
            )
        );
    };

    const handleDeleteClick = (id) => {
        setExperienceCards(prevExperiences =>
            prevExperiences.filter(card => card.id!== id));
    }


    const handleTitleLenght = (card) => {
        if (card.organization.length > 8) {
            return card.organization.slice(0, 7) + '...'
        } else {
            return card.organization
        }
    }


    return (
        <div className="experience-module">

            <div className="experience-header">
                {svg}
                <h2>{title}</h2>
            </div>

            <div className="card-container">

                    {experienceCards.map((card) => (

                        <div key={card.id} className="experience-card-holder">
                            <div className="experience-card-header" onClick={() => toggleModule(card.id)}>

                                <svg className="delete-icon" onClick={() => {handleDeleteClick(card.id), onDeleteExperience(card)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px"
                                     fill="#434343">
                                    <path
                                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg>

                                <h2>{handleTitleLenght(card)}</h2>

                                <svg className={`downArrow ${activeIndex === card.id ? 'show' : ''}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px"
                                     fill="#FFFFFF">
                                    <path d="M480-360 280-560h400L480-360Z"/>
                                </svg>

                            </div>

                            <ul className={`sub-menu ${activeIndex === card.id ? 'show' : ''}`}>
                                <div>
                                    <li key={card.id} className="experience-card">
                                        <ExperienceCard
                                            key={card.id}
                                            card={card}
                                            onCardChange={handleCardChange}
                                            onUpdateExperience={onUpdateExperience}
                                            onAddExperience={onAddExperience}
                                            onCreated={true}
                                        />
                                    </li>
                                </div>
                            </ul>

                        </div>
                    ))}

            </div>

            <button onClick={() => {handleButtonClick()}} className={`${title}-btn btn`}>{title} +</button>
        </div>
    )
}