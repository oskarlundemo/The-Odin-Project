
import '../styles/PersonalDetails.css'




export default function PersonalDetails () {

    return (
        <form>
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
                placeholder = "Enter email">
            </InputCard>

            <InputCard
                label = "Phone number"
                type = "text"
                name = "text"
                placeholder = "Enter phone number">
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


function InputCard ({label, type, name, placeholder}) {

    return (
        <div className ="input-card">
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder}></input>
        </div>
    )
}