import PersonalDetails from "./PersonalDetails.jsx";
import '../styles/Aside.css'
import {DropdownModule} from "./DropdownMenu.jsx";


export default function SideBar () {

    return (
        <aside>
            <PersonalDetails/>

            <DropdownModule
                className="education"
                title="Education"
                path="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"

                organization="School"
                organizationdescription = "Uppsala university"

                organizationTitle = "Field of study"
                organizationProgram = "Software Engineering"

                description = "Description"
                furtherDescription = "What you learnt..."

                time = "Time period"
                timeperiod = "2024-08 10 / - 2025-03-12"

            ></DropdownModule>

            <DropdownModule
                className="experience"
                title="Experience"
                path="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"

                organization="Company"
                organizationdescription = "Random startup"

                organizationTitle = "Title"
                organizationProgram = "Junior Developer"

                description = "Description"
                furtherDescription = "What you did..."

                time = "Time period"
                timeperiod = "2024-08 10 / - 2025-03-12"

            ></DropdownModule>

        </aside>
    )
}