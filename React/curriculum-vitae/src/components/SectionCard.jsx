import '../styles/SectionCard.css'


export const SectionCard = ({ card }) => {
    const {
        organization = "Unknown Organization",
        occupation = "Unknown Role",
        startdate = "Unknown Start Date",
        enddate = "Unknown End Date",
        description = "No description provided",
    } = card || {}; // Destructure safely with fallback values

    return (
        <div className="section-card">
            <div className="section-card-container">
                <div className="section-card-header">
                    <h2>{organization} - {occupation}</h2>
                    <h2 className="section-card-date">{startdate} - {enddate}</h2>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};