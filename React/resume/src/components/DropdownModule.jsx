import '../styles/Dropdown.css'
import '../index.css'
import {InputCard} from "./PersonalDetails.jsx";
import {useState} from "react";

export function DropdownModule (props) {

    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return (

        <div className = "dropdownmodule" id = {props.id}>
        <ul className="dropdown-div">
            <li>
            <button className="dropdown-btn button" onClick={ () => {toggleClass()}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#FFFFFF">
                    <path d={props.path}/>
                </svg>

                <span>{props.title}</span>

                <svg xmlns="http://www.w3.org/2000/svg" className={`downArrow ${isActive ? 'rotate' : ''}`} height="24px" viewBox="0 -960 960 960"
                     width="24px"
                     fill="#FFFFFF">
                    <path d="M480-360 280-560h400L480-360Z"/>
                </svg>
            </button>

                <ul className={`sub-menu ${isActive ? 'show' : ''}`}>
                <div>
                    <li>
                        <InputCard
                            label={props.organization}
                            type="text"
                            name="text"
                            placeholder={props.organizationdescription}>
                        </InputCard>
                    </li>

                    <li>
                        <InputCard
                            label={props.organizationTitle}
                            type="text"
                            name="text"
                            placeholder={props.organizationProgram}>
                        </InputCard>
                    </li>

                    <li>
                        <InputCard
                            label={props.description}
                            type="textarea"
                            name="text"
                            placeholder={props.furtherDescription}>
                        </InputCard>
                    </li>


                    <li>
                        <InputCard
                            label={props.time}
                            type="text"
                            name="text"
                            placeholder={props.period}>
                        </InputCard>
                    </li>
                </div>
            </ul>
            </li>
        </ul>
        </div>
    )
}
