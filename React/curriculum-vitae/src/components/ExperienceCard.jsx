
import '../styles/ExperienceCard.css'
import {useContext, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";



export const ExperienceCard = () => {

    const { experienceInfo: input, setExperienceInfo: setInput } = useContext(AppContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInput((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };



    return (
        <div className="experience-card-container">

            <label>Organization</label>
            <input
                type="text"
                name="organization"
                placeholder="Name of your organization"
                onChange={handleInputChange}
                value={input.organization}
            />


            <label>Occupation</label>
            <input
                type="text"
                name="occupation"
                placeholder="The name of your title"
                onChange={handleInputChange}
                value={input.occupation}
            />


            <div>
                <label>Start date</label>
                <input
                    type="date"
                    name="startdate"
                    onChange={handleInputChange}
                    value={input.startdate}
                />

                <label>End date</label>
                <input
                    type="date"
                    name="enddate"
                    onChange={handleInputChange}
                    value={input.enddate}
                />
            </div>


            <label>Description</label>
            <textarea
                name="description"
                placeholder="Describe your tasks"
                onChange={handleInputChange}
                value={input.description}
            />

        </div>
    )

}