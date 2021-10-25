import styled from "styled-components"

export const Container=styled.div`
   
   
    background:#04040F;
`
export const Area=styled.div`
    width: 1000px;
    margin:auto;
    header{
        height: 80px;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .btn{
        background:transparent;
        border: none;
       color:white;
       font-size: 20px;
        margin:0 20px;
        cursor:pointer
    }
    h1{
        color: white;
        font-size: 20px;
    }
    main{
        display: flex;
        justify-content: center;
        gap: 5px;
         display: grid;
         grid-template-columns: repeat(auto-fit,300px);
         padding: 30px 0;
    }
`