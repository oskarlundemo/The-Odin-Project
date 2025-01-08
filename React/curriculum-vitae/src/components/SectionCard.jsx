import '../styles/SectionCard.css'
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";


export const SectionCard = ({ card }) => {

    const {experienceInfo: info} = useContext(AppContext);


    return (
        <div className="section-card">
            <div className="section-card-container">
                <div className="section-card-header">
                    <h2>{info.organization} - {info.occupation}</h2>
                    <h2 className="section-card-date">{info.startdate} - {info.enddate}</h2>
                </div>
            </div>
            <p>{info.description}</p>
        </div>
    );
};