
import '../styles/Section.css'
import PropTypes from 'prop-types';


export default function Section ({title, card}) {
    return (
        <section>
            <h2>{title}</h2>
            <div className="section-content">
                {card}
            </div>
        </section>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    card: PropTypes.element.isRequired
}