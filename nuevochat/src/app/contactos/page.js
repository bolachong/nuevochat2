"use client"

import Button from "@/components/Button"
import Contacto from "@/components/Contacto"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function contacto() {
  const [logued, setLogued] = useState(0)
  const [contactos, setContactos] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const loguedUser = localStorage.getItem("loguedUser")
    setLogued(parseInt(loguedUser))
    ids(loguedUser)
  }, [])

  function moverse() {
    router.replace("../login")
  }

  function crear() {
    router.replace("../crear")
  }

  function idsChat(datos){
    fetch("http://localhost:4000/contactos",
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

  function ids(logued) {
    if(logued == undefined){
        return alert("Error, Faltan datos")
    } else {
      let datos = {
        id: logued
    }
      idsChat(datos)
    }
  }

    function moverse2(){
        console.log(event.currentTarget.id)
        localStorage.setItem("selectedChat", event.currentTarget.id)
        router.push("../chat")
    }

    return (
        <>
            <Button
                onClick={moverse}
                text="Volver"
            ></Button>
            <h1>Contactos</h1>
            {contactos.length != 0 && contactos.map((contacto, index)=>{
                console.log("contacto: ",contacto)
                if(contacto.Imagen == null && contacto.Es_Grupo == false){
                contacto.Imagen = "https://i.pinimg.com/736x/3f/b3/ad/3fb3ad470f16439fe406e91ae7e3c98a.jpg"
                } else if(contacto.Imagen == null && contacto.Es_Grupo == true){
                contacto.Imagen = "https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg"
                }
                return (
                    <Contacto
                    key={index}
                    mail={contacto.Nombre} url={contacto.Imagen}
                    onClick={moverse2}
                    ></Contacto>
                )
            })
            }
            <Button
                onClick={crear}
                text="Nuevo chat"
            ></Button>
        </>
    )
}