"use client"

import styles from "@/components/Contacto.module.css"

export default function Contacto(props) {
    return (
        <>
            <div onClick={props.onClick} id={props.id} className={props.className}>
                
                <img src={props.url} className={styles.foto}></img>
                <h3>{props.mail}</h3>
            </div>
        </>
    )

}