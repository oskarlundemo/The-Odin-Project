import '../styles/Dropdown.css'
import '../index.css'
import {InputCard} from "./PersonalDetails.jsx";

export function DropdownModule (props) {

    return (

        <div className = "dropdownmodule" id = {props.id}>
        <ul className="dropdown-div">
            <li>
            <button className="dropdown-btn" onClick={ExposeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#FFFFFF">
                    <path d={props.path}/>
                </svg>

                <span>{props.title}</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="downArrow" height="24px" viewBox="0 -960 960 960"
                     width="24px"
                     fill="#FFFFFF">
                    <path d="M480-360 280-560h400L480-360Z"/>
                </svg>
            </button>

            <ul className="sub-menu">
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
                            placeholder={props.timeperiod}>
                        </InputCard>
                    </li>
                </div>
            </ul>
            </li>
        </ul>
        </div>
    )
}


function ExposeMenu(e) {
    e.currentTarget.nextSibling.classList.toggle('show');
    e.currentTarget.parentElement.querySelector('.downArrow').classList.toggle('rotate');
}