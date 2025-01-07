
import React, {useState} from 'react';
import {ExperienceCard} from "./ExperienceCard.jsx";



export const ExperienceModule = ({title, svg, onAddExperience}) => {

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
        setExperienceCards((prevWorkCards) =>
            prevWorkCards.map((card) =>
                card.id === id ? { ...card, ...updatedCard } : card
            )
        );
    };


    return (
        <div className="experience-module">

            <div className="experience-header">
                <h2>{title}</h2>
                {svg}
            </div>

            <div className="card-container">

                    {experienceCards.map((card, index) => (

                        <div key={index} className="experience-card-holder">
                            <div className="experience-card-header" onClick={() => toggleModule(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px"
                                     fill="#434343">
                                    <path
                                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg>

                                <h2>{card.organization}</h2>

                                <svg className={`downArrow ${activeIndex === index ? 'show' : ''}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px"
                                     fill="#FFFFFF">
                                    <path d="M480-360 280-560h400L480-360Z"/>
                                </svg>

                            </div>

                            <ul className={`sub-menu ${activeIndex === index ? 'show' : ''}`}>
                                <div>
                                    <li key={index} className="experience-card">
                                        <ExperienceCard
                                            key={card.id}
                                            card={card}
                                            onCardChange={handleCardChange}
                                        />
                                    </li>
                                </div>
                            </ul>

                        </div>
                    ))}

            </div>

            <button onClick={() => {handleButtonClick(); onAddExperience();}} className={`${title}-btn btn`}>{title} +</button>
        </div>
    )
}