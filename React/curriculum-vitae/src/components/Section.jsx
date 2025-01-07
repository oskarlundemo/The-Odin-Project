

import '../styles/Section.css'
import {SectionCard} from "./SectionCard.jsx";


export default function Section ({title, sectionCards}) {
    return (
        <section className={`${title}-container`}>
            <h2>{title}</h2>
            {sectionCards.map((card) => (
                <SectionCard key={card.id} card={card} />
            ))}
        </section>
    )
}