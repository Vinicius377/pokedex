import * as C from "./styles"

type Props={
    name:string
    img:string
}

export function CardPoke({name,img}:Props){
     return(
         <C.Container>
             <h1>{name}</h1>
             <img src={img} width="100"/>
         </C.Container>
     )
}