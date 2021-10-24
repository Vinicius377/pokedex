import { CardPoke } from "../CardPoke"
import * as C from "./style"
import {useState,useEffect} from "react"
import {metadados} from "../../types/metadados"


type Props={
    name:string
    url:string
}

export const ListPoke=({name,url}:Props)=>{
    const [metadados,setMetadatos]=useState<metadados>({sprit:"",type:""})

    const dados = async ()=>{
        const response= await fetch(url)
        const json= await response.json()
        setMetadatos({sprit:json.sprites.front_default,type:json.types[0].type.name})
    }
    useEffect(()=>{
        dados()
    },[])
    console.log(metadados)
    return(
        <C.Container color={metadados.type==""? "normal":metadados.type }>
                <CardPoke name={name} img={metadados.sprit}/>
        </C.Container>
    )
} 