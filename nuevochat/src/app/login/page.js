"use client"

import FormL from "@/components/FormL"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function login(){

    const router = useRouter()
    const [valorM, setValorM] = useState("")
    const [valorC, setValorC] = useState("")

    function moverse(){
        router.replace("../registro")
    }

    function corrobao1(event){
        setValorM(event.target.value)
    }

    function corrobao2(event){
        setValorC(event.target.value)
    }

    return (
        <>
            <FormL
                titulo="Iniciar sesión"
                type1="text"
                type2="password"
                textb="Iniciar sesion"
                onChange1={corrobao1}
                onChange2={corrobao2}
                text="No tengo cuenta"
                mover={moverse}
            ></FormL>
        </>
    )
}