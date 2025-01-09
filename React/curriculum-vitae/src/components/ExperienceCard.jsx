
import '../styles/ExperienceCard.css'
import {useState} from "react";



export const ExperienceCard = ({card, onCardChange, onUpdateExperience, onAddExperience}) => {

    const [disableInput, setDisabledInput] = useState(false);
    const [hasCreatedCard, setHasCreatedCard] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onCardChange(card.id, { [name]: value });
        onUpdateExperience(card.id, {[name] : value});
    };


    const handleDisableInput = () => {
        if (disableInput) {
            setDisabledInput(false);
        } else {
            setDisabledInput(true);
        }
    }

    const handleSubmit = () => {
        setHasCreatedCard(true);
        if (!hasCreatedCard) onAddExperience(card);
    }

    return (
        <div className="experience-card-container">

            <label>Organization</label>
            <input
                type="text"
                name="organization"
                placeholder="Organization name"
                onChange={handleInputChange}
                value={card.organization}
                disabled={disableInput}
            />

            <label>Occupation</label>
            <input
                type="text"
                name="occupation"
                placeholder="The name of your title"
                onChange={handleInputChange}
                value={card.occupation}
                disabled={disableInput}
            />


            <div>
                <label>Start date</label>
                <input
                    type="date"
                    name="startdate"
                    onChange={handleInputChange}
                    value={card.startdate}
                    disabled={disableInput}
                />

                <label>End date</label>
                <input
                    type="date"
                    name="enddate"
                    onChange={handleInputChange}
                    value={card.enddate}
                    disabled={disableInput}
                />
            </div>


            <label>Description</label>
            <textarea
                name="description"
                placeholder="Describe your tasks"
                onChange={handleInputChange}
                value={card.description}
                disabled={disableInput}
            />

            <button onClick={() => {handleSubmit(), handleDisableInput()}}>{disableInput ? "Edit" : "Save"}</button>
        </div>
    )

}