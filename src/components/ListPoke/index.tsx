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
    const [listType,setListType]=useState<string[]>([])

    const dados = async ()=>{
        const response= await fetch(url)
        const json= await response.json()
        const type=json.types.map((tipo:{type:{name:string}})=>
            setListType(prev=>[...prev,tipo.type.name])
        )        

        setMetadatos({sprit:json.sprites.other["official-artwork"].front_default||  json.sprites.front_default ,
                    type:json.types[0].type.name})
      
    }
    
    useEffect(()=>{
       
        dados()
    },[name])
  console.log(listType)
    return(
        <C.Container color={metadados.type==""? "normal":metadados.type }>
                <CardPoke name={name} img={metadados.sprit} listtype={listType}/>
        </C.Container>
    )
} 