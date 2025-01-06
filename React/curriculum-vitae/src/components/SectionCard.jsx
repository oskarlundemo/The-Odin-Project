import '../styles/SectionCard.css'
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";

export const SectionCard = () =>  {

    const {experienceInfo} = useContext(AppContext);
    return (
        <div className="section-card">
            <div className="section-card-container">
                <div className="section-card-header">
                    <h2>{experienceInfo.organization} - {experienceInfo.occupation}</h2>
                    <h2 className="section-card-date">{experienceInfo.startdate} - {experienceInfo.enddate}</h2>
                </div>
            </div>
            <p>{experienceInfo.description}</p>
        </div>
    )
}