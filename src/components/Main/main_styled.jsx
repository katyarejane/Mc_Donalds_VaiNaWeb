import styled from "styled-components";

export const Main = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 199, 44, 1)

`;

export const ContainerPrincipal = styled.div`


    display: flex;
   
    border: 1px solid black;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  
    `;

export const ContainerImagens = styled.div`
    
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;

img {
    width: 60px;
    height: 60px;
}
    
`;

export const ContainerCards = styled.div`
    
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        border: 1px solid black;

        img {
            width: 100%;
            
        }

        div {
            width: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 320px;
            background-color: white;
            margin: 0px 10px;
            border-radius: 12px;
        }
    
    `;