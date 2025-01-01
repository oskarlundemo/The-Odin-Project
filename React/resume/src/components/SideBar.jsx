import PersonalDetails from "./PersonalDetails.jsx";
import '../styles/Aside.css'
import EducationModule from "./Education.jsx";
import {useState} from "react";


export default function SideBar ({onAddElement}) {


    return (
        <aside>
            <PersonalDetails/>
            <EducationModule title = "Education" onAddElement={onAddElement}></EducationModule>
        </aside>
    )
}