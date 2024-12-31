
import '../styles/Section.css'
import PropTypes from 'prop-types';
import SectionCard from "./SectionCard.jsx";


export default function Section({ title, elements }) {
    return (
        <section>
            <h2>{title}</h2>
            <div className="section-content">
                {elements.map((element) => (
                    <SectionCard
                        key={element.id}
                        title={element.title}
                        organization={element.organization}
                        period={element.period}
                        description={element.description}
                    />
                ))}
            </div>
        </section>
    );
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    card: PropTypes.element.isRequired
}