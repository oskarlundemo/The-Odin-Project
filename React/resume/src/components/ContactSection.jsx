
import '../styles/ContactInfo.css'
import '../index.css'



export default function ContactSection () {
    return (
        <div className ='contact-info'>
            <ContactCard
                src='/phone.svg'
                alt='Icon of phone number'
                data='+1 123 456 7890'
                >
            </ContactCard>

            <ContactCard
                src='/mail.svg'
                alt='Icon of phone number'
                data='john.doe@domain.com'
            >
            </ContactCard>

            <ContactCard
                src='/location.svg'
                alt='Icon of phone number'
                data='Uppsala, Sweden'
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