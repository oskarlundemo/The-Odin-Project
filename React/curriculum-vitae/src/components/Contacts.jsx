import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import '../styles/Contacts.css'



export default function Contacts () {

    const {inputValue} = useContext(AppContext);

    return (
        <div className ='contact-info'>
            <ContactCard
                src='/phone.svg'
                alt='Icon of phone number'
                data={inputValue.phone}
            >
            </ContactCard>

            <ContactCard
                src='/mail.svg'
                alt='Icon of phone number'
                data={inputValue.email}
            >
            </ContactCard>

            <ContactCard
                src='/location.svg'
                alt='Icon of phone number'
                data={inputValue.city}
            >
            </ContactCard>
        </div>
    )
}


function ContactCard ({src, alt, data}) {
    return (
        <div className ='contact-card'>
            <img src={src} alt={alt} />
            <p>{data}</p>
        </div>
    )
}