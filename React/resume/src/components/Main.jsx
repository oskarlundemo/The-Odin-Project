
import '../styles/Main.css'
import Section from "./Section.jsx";



export default function Main ({elements}) {
    return (
        <main>
            <Section elements={elements} title="Education"/>
            <Section title ="Work"></Section>
        </main>
    )
}