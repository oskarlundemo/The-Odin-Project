

import '../styles/SectionCard.css'

export const SectionCard = ({title}) =>  {


    return (
        <div className="section-card">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tellus euismod, consectetur nisi vel, consectetur ligula. Sed et urna vel purus dictum fermentum.</p>
        </div>
    )
}