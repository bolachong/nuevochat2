"use client"


export default function ButtonM(props) {

    return (
        <>
            <button onClick={props.onClick}>{props.text}</button>
        </>
    )

}