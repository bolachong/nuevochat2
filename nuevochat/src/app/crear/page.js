"use client"

import Button from "@/components/Button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function crear() {
    const router = useRouter()
    const [logued, setLogued] = useState(0)

  useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    setLogued(parseInt(loguedUser))
    ids(loguedUser)
  }, [])

  function moverse() {
    router.replace("../contacto")
  }

  function idsChat(datos){
    fetch("http://localhost:4000/crear",
    {
      method:"POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(result =>{



      if (result.validar == true){
          console.log(result.chats)
          setContactos(result.chats)
      } else {
          return alert("La Cagaste")
      }}
    )
  }

    function creoMesa() {
    if(codigoMesa == undefined || modo == undefined || limite == undefined || mailUser == undefined){
        return alert("Error, faltan datos")
    }
    let a = modo.toLowerCase()
    let datos = {
        num_mesa: codigoMesa,
        estado: a
    }
    crearMesa(datos)}

    return (
        <>
            <h1>Creador</h1>
            <Button
                onClick={moverse}
                text="Volver"
            ></Button>
        </>
    )
}