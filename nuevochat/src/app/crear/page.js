"use client"

import Button from "@/components/Button"
import FormC from "@/components/FormC"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function crear() {
    const router = useRouter()
    /*const [logued, setLogued] = useState(0)
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")

  useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    setLogued(parseInt(loguedUser))
    ids(loguedUser)
  }, [])*/

  function moverse() {
    router.replace("../contacto")
  }

  /*function crearChat(datos){
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

    function creoChat() {
    if(mail == undefined || nombre == undefined){
        return alert("Error, faltan datos")
    }
    let datos = {
        mail_user: mail,
        nombre_user: nombre
    }
    crearChat(datos)}*/

    return (
        <>
            <h1>Creador</h1>
            <Button
                onClick={moverse}
                text="Volver"
            ></Button>
            <FormC
              text="Crear contacto"
            ></FormC>
        </>
    )
}