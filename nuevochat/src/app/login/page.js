"use client"

import FormL from "@/components/FormL"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function login(){
    return (
        <>
            <FormL
                titulo="Iniciar sesión"
                type1="text"
                type2="password"
                textb="Iniciar sesion"
                text="No tengo cuenta"
                mover={moverse}
            ></FormL>
        </>
    )
}