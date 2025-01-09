
import '../styles/Customize.css'
import {useState} from "react";




export const Customize = () => {

    const [isSelected, setSelected] = useState(true);


    return (
        <div className="edit-container">

            <div className={`content-container ${isSelected ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#434343">
                    <path
                        d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
                </svg>
            </div>

            <div className={`cutomize-container ${isSelected ? '' : 'active'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#434343">
                    <path
                        d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/>
                </svg>
            </div>
        </div>
    )
}