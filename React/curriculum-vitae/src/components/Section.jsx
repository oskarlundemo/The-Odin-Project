

import '../styles/Section.css'
import {SectionCard} from "./SectionCard.jsx";


export default function Section ({title, cards}) {
    return (
        <section className={`${title}-container`}>
            <h2>{title}</h2>
            {cards}
            <SectionCard></SectionCard>
        </section>
    )
}