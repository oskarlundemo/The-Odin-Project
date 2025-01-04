



export const ExperienceModule = ({title, svg}) => {

    return (
        <div className="experience-module">

            <div className="experience-header">
                <h2>{title}</h2>
                {svg}
            </div>

            <button className={`${title}-btn btn`}>{title} +</button>
        </div>
    )
}