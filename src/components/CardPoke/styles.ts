import styles from "styled-components"
import { colors } from "../typesColors"



export const Container=styles.div`

    background:white;
    width:100%;
    min-height:140px;
    border-radius:8px;
    border:3px solid #04040F;
    h1{
        color:black;
        text-align:center;
    }
   
` 
type Prop={
    type:string
}
export const Tipos=styles.span(({type}:Prop)=>`
    text-align:center;
    background:${colors[type]};
    border-radius:8px;
    padding:5px;
    margin:0 3px;
 
    font-weight:700;
`)