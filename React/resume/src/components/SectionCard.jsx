import PropTypes from 'prop-types';
import '../styles/SectionCard.css'
import {useState} from "react";



export default function SectionCard ({title, organization, period, description}) {


    return (
        <div className="section-card">
            <h2>{title && title}</h2>
            <h3>{organization && <span>{organization}</span>}{period && <span> - {period}</span>}</h3>
            <p>{description}</p>
        </div>
    )
}


SectionCard.propTypes = {
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

