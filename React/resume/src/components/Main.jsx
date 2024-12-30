
import '../styles/Main.css'
import Section from "./Section.jsx";
import SectionCard from "./SectionCard.jsx";



export default function Main () {
    return (
        <main>

            <Section title="Education" card={<SectionCard  description={"Test"} title={"Systemvetare"} organization={"Uppsala Universitet"} timeperiod={"2023-2024"}/>} />  {}

            <Section
                title ="Work"
            ></Section>

        </main>
    )
}