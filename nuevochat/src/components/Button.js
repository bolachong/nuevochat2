"use client"

export default function Button(props) {

    return (
        <>
            <button id={props.id} onClick={props.onClick}>{props.text}</button>
        </>
    )

}