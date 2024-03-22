import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    `;

export const Header = styled.header`

border: solid 2px pink;
display: flex;
justify-content: space-between;
padding: 1em 2em;

section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 380px;
}
div {
    display: flex;
    align-items: center;
    padding: 10px;

}
    
`;

