import { CardPoke } from "../CardPoke"
import * as C from "./style"
import {useState,useEffect} from "react"
import {metadados} from "../../types/metadados"

type Props={
    name:string
    url:string
}

export const ListPoke=({name,url}:Props)=>{
    const [metadados,setMetadatos]=useState<metadados>({sprit:""})

    const dados = async ()=>{
        const response= await fetch(url)
        const json= await response.json()
        setMetadatos({sprit:json.sprites.front_default})
    }
    useEffect(()=>{
        dados()
    },[])
   
    return(
        <C.Container>
                <CardPoke name={name} img={metadados.sprit}/>
        </C.Container>
    )
} 