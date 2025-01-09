import '../styles/SectionCard.css'

export const SectionCard = ({card}) => {


    return (
        <div className="section-card">
            <div className="section-card-container">
                <div className="section-card-header">
                    <h2>{card.organization} - {card.occupation}</h2>
                    <h2 className="section-card-date">{card.startdate} - {card.enddate}</h2>
                </div>
            </div>
            <p>{card.description}</p>
        </div>
    );
};