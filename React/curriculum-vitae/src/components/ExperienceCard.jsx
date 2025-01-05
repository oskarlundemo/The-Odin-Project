
import '../styles/ExperienceCard.css'



export const ExperienceCard = () => {



    return (
        <div className="experience-card-container">


            <label>Organization</label>
            <input
                type="text"
                name="organization"
                placeholder="Name of your organization"

            />


            <label>Occupation</label>
            <input
                type="text"
                name="title"
                placeholder="The name of your title"

            />


            <label>Period</label>
            <input
                type="date"
                name="period"
                placeholder="Last name"

            />

            <label>Description</label>
            <input
                type="textarea"
                name="description"
                placeholder="Describe your tasks and their dependencies"
            />

        </div>
    )

}