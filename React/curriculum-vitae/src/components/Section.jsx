

import '../styles/Section.css'
import {SectionCard} from "./SectionCard.jsx";



export default function Section () {
    return (
        <section className="section-container">
            <SectionCard title={"Work"}/>
            <SectionCard title={"Education"}/>
        </section>
    )
}