import '../styles/Dropdown.css'
import '../index.css'
import {InputCard} from "./PersonalDetails.jsx";

export function DropdownModule (props) {
    return (

        <div id = 'education'>
        <ul className="dropdown-div">
            <li>
            <button className="dropdown-btn">
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
                    <li><InputCard/></li>
                    <li><InputCard/></li>
                    <li><InputCard/></li>
                </div>
            </ul>
            </li>
        </ul>
        </div>
    )
}


function ExposeMenu() {
    let test = document.querySelector('.downArrow');
    let test2 = document.querySelector('.inputSection')
    test.classList.toggle('show');
    test2.classList.toggle('active');
}