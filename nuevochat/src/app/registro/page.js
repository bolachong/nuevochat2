"use client"

import FormR from "@/components/FormR"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"

export default function registro() {

    const router = useRouter()

    function moverse(){
        router.replace("../login")
    }

    return (
        <>
            <FormR
                titulo="Resgistro"
                type1="text"
                type2="password"
                textb="Registrar"
                text="Ya tengo cuenta"
                mover={moverse}
            ></FormR>
        </>
    )
}