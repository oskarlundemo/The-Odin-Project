



export default function ContactInfo () {
    return (
        <div className ='contact-info'>
            <ContactCard
                src='https://via.placeholder.com/150'
                >
            </ContactCard>
        </div>
    )
}


function ContactCard ({src, data}) {
    return (
        <div className ='contact-card'>
            <img src={src} alt={data.name} />
            <p>{data}</p>
        </div>
    )
}