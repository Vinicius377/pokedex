import styled from "styled-components"
import {colors} from "../typesColors"

type Props={
    color:string
}
console.log(colors)
export const Container=styled.div(({color}:Props)=>`
            padding:7px;
            background:${colors[color]};
            box-sizing: content-box;
            border-radius:8px;
            display: flex;
            justify-content: center;
           border:5px solid white;
`)
  
