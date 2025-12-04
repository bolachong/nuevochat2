"use client"

import FormL from "@/components/FormL"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function login(){

    const router = useRouter()
    const [usuarios, setUsuarios] = useState([])
    const [valorM, setValorM] = useState("")
    const [valorC, setValorC] = useState("")

    function corrobao1(event){
        setValorM(event.target.value)
        console.log(valorM)
    }

    function corrobao2(event){
        setValorC(event.target.value)
        console.log(valorC)
    }

    function moverse(){
        router.replace("../registro")
    }
    
    function loguear(datos){
        if (valorM != "" && valorC != ""){
            fetch("http://localhost:4000/login",
            {
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                if (result.validar == true){
                    console.log(result.log[0].Id_usuario)
                    localStorage.setItem("loguedUser", result.log[0].Id_usuario)
                    console.log("soy gay")
                } else {
                    return alert("La Cagaste")
                }}
            )
        }
    }

    
    function loguea() {
    if(valorM == undefined || valorC == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        mail: valorM,
        password: valorC
    }
    loguear(datos)}

    useEffect(()=>{
        console.log(usuarios)
    }, [usuarios])


    return (
        <>
            <FormL
                value1={valorM}
                value2={valorC}
                titulo="Iniciar sesión"
                type1="text"
                type2="password"
                textb="Iniciar sesion"
                onClick={loguea}
                onChange1={corrobao1}
                onChange2={corrobao2}
                text="No tengo cuenta"
                mover={moverse}
            ></FormL>
        </>
    )
}