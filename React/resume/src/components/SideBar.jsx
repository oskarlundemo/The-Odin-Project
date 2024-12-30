import PersonalDetails from "./PersonalDetails.jsx";
import '../styles/Aside.css'
import EducationModule from "./Education.jsx";


export default function SideBar () {

    return (
        <aside>
            <PersonalDetails/>
            <EducationModule title = "Education"></EducationModule>

        </aside>
    )
}