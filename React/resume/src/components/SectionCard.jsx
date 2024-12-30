import PropTypes from 'prop-types';
import '../styles/SectionCard.css'



export default function SectionCard ({title, organization, timeperiod, description}) {
    return (
        <div className="section-card">
            <h2>{title && title}</h2>
            <h3>{organization && <span>{organization}</span>}{timeperiod && <span> - {timeperiod}</span>}</h3>
            <p>{description}</p>
        </div>
    )
}


SectionCard.propTypes = {
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    timeperiod: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}