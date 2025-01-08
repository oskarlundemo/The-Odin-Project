
import '../styles/ExperienceCard.css'



export const ExperienceCard = ({card, onCardChange, onExperienceChange}) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onCardChange(card.id, { [name]: value });
    };


    return (
        <div className="experience-card-container">

            <label>Organization</label>
            <input
                type="text"
                name="organization"
                placeholder="Organization name"
                onChange={handleInputChange}
                value={card.organization}
            />


            <label>Occupation</label>
            <input
                type="text"
                name="occupation"
                placeholder="The name of your title"
                onChange={handleInputChange}
                value={card.occupation}
            />


            <div>
                <label>Start date</label>
                <input
                    type="date"
                    name="startdate"
                    onChange={handleInputChange}
                    value={card.startdate}
                />

                <label>End date</label>
                <input
                    type="date"
                    name="enddate"
                    onChange={handleInputChange}
                    value={card.enddate}
                />
            </div>


            <label>Description</label>
            <textarea
                name="description"
                placeholder="Describe your tasks"
                onChange={handleInputChange}
                value={card.description}
            />

        </div>
    )

}