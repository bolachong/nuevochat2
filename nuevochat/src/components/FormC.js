"use client"

import Button from "./Button"
import Input from "./Input"

export default function FormC(props) {
    return(
        <>
            <h1>Crear contacto</h1>
            <h3>Nombre</h3>
            <Input type={props.type} value={props.value} onChange={props.onChange}></Input>
            <br></br>
            <h3>Mail</h3>
            <Input type={props.type2} value={props.value2} onChange={props.onChange2}></Input>
            <br></br>
            <Button onClick={props.onClick}>{props.text}</Button>
        </>
    )
}