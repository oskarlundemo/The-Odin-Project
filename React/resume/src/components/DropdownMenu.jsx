
import '../styles/Dropdown.css'
import '../index.css'


export function DropdownModule (props) {
    return (
        <form className={props.className}>
            <div className="titleSection">

                <div>
                    <h2>{props.title}</h2>

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#FFFFFF">
                        <path d={props.path}/>
                    </svg>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className = "downArrow" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#FFFFFF">
                        <path d="M480-360 280-560h400L480-360Z"/>
                    </svg>
                </div>
            </div>

            <div className="inputSection">
                <button type="button" className="btn btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#00000">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>
                    {props.title}
                </button>
            </div>
        </form>
    )
}