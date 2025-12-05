"use client"

import ButtonM from "./ButtonM"
import Input from "./Input"

export default function InputM(props) {
    
    return (
        <>  
            <div>
                <input type={props.text} onChange={props.onChange} value={props.value}></input>
                <ButtonM
                    onClick={props.onClick}
                    text={props.textb}
                ></ButtonM>
            </div>
        </>
    )

}