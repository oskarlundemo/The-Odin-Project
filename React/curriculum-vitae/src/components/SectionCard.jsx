

import '../styles/SectionCard.css'

export const SectionCard = ({organization, title, description, period}) =>  {



    return (
        <div className="section-card">
            <div>
                <h2>{title} - {organization}</h2>
                <h2>{period}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}