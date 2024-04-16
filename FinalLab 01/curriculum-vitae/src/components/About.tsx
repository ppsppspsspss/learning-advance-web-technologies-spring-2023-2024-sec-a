interface Props{
    name: string,
    role: string,
    phone: string,
    email: string,
    address: string,
    summary: string
}

function About ({name, role, phone, email, address, summary}: Props){

    return(
        <>
            <div>
                <h1>{name}</h1>
                <h2>{role}</h2>
                <b>Phone:</b>&nbsp;&nbsp;{phone} <br />
                <b>Email:</b>&nbsp;&nbsp;{email} <br />
                <b>Address:</b>&nbsp;&nbsp;{address} <br /><br />
                {summary} <br />
            </div>
        </>
    )
}

export default About;