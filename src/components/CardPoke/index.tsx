import * as C from "./styles"

type Props={
    name:string
    img:string
    listtype:string[]
}

export function CardPoke({name,img,listtype}:Props){
    
     return(
         <C.Container >
             <h1>{name}</h1>
             <img src={img} width="100"/>
             {listtype.map(tipo=> <C.Tipos type={tipo}>{tipo}</C.Tipos>)}
              
             
         </C.Container>
     )
}