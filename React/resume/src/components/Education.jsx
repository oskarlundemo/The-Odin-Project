import {DropdownModule} from "./DropdownModule.jsx";
import '../styles/Education.css'
import {useState} from "react";


export default function EducationModule({title}) {
    // Use state to track the list of dropdown modules
    const [dropdownModules, setDropdownModules] = useState([]); // Initial state with one module

    // Function to add a new DropdownModule when button is clicked
    const addDropdownModule = () => {
        setDropdownModules([dropdownModules, <DropdownModule key={dropdownModules.length + 1}

                                                             organization = "School"
                                                             organizationdescription = 'Uppsala University'

                                                             organizationTitle = "Program"
                                                             organizationProgram = 'Litterature'

                                                             description = "Description"
                                                             furtherDescription = "What did you learn?"

                                                             time = "Enrollment"
                                                             period = '2024-10-29 / 2025-12-29'

        />]);
    };

    return (
        <div className="education-container">
            <div className="education-header">
                <h3>{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path
                        d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
                </svg>
            </div>

            <div className="module-container">
                {dropdownModules}
            </div>

            <button className="button moduleBtn" onClick={addDropdownModule}>
                + {title}
            </button>
        </div>




    );
};