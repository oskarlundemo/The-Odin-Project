import '../styles/PersonalDetails.css'





export default function PersonalDetails () {

    return (
        <form className ="personal-info">
            <h2>Personal Details</h2>
            <InputCard
                label = "First name"
                type = "text"
                name = "firstName"
                placeholder = "First and last name">
            </InputCard>

            <InputCard
                label = "Email"
                type = "mail"
                name = "email"
                placeholder = "example@domain.se">
            </InputCard>

            <InputCard
                label = "Phone number"
                type = "text"
                name = "text"
                placeholder = "+46 07 456 789">
            </InputCard>

            <InputCard
                label = "Adress"
                type = "text"
                name = "adress"
                placeholder = "City, Country">
            </InputCard>
        </form>
    )
}


export function InputCard ({label, type, name, placeholder}) {

    return (
        <div className="input-card">
            <label>{label}</label>
            {type === "textarea" ? (
                <textarea name={name} placeholder={placeholder}></textarea>
            ) : (
                <input type={type} name={name} placeholder={placeholder}></input>
            )}
        </div>
    )
}