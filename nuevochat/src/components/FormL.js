"use client"

import Button from "./Button"
import Input from "./Input"

export default function FormL(props) {
    return (
        <>
            <div>
                <h1>{props.titulo}</h1>
                <h2>Mail</h2>
                <Input type={props.type1} onChange={props.onChange1} value={props.value1}></Input>
                <h4>Password</h4>
                <Input type={props.type2} onChange={props.onChange2} value={props.value2}></Input>
                <br></br>
                <Button text={props.textb} onClick={props.onClick}></Button>
                <br></br>
                <br></br>
                <Button text={props.text} onClick={props.mover}></Button>
            </div>
        </>
    )
}