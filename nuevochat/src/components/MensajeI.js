"use client"

export default function MensajeI(props) {

    return (
        <>
            <div>
                <h6>{props.mail}</h6>
                <p>{props.text}</p>
            </div>
        </>
    )

}