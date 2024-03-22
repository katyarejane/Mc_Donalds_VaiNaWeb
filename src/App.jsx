/** @format */
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./components/Main/Card";
import * as S from "./components/Header/header_styled";


function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Card/>
    </>
    
  );
}

export default App;