import React from 'react'
import Bigmac from '../../assets/bigmac.png';
import Batata from '../../assets/batata.png';
import Sorvete from '../../assets/sorvete.png';
import Banner1 from '../../assets/Banner1.png';
import Banner2 from '../../assets/Banner2.png';
import Banner3 from '../../assets/Banner3.jpg';
import * as S from './main_styled';
import Card from './Card';


export default function Main() {
  return (
   <S.Main>
    <section>
      <S.ContainerPrincipal>
        <img src={Bigmac} alt="Bigmac" />
        <p>BATEU AQUELA #FOME DE MÉQUI?</p>
      </S.ContainerPrincipal>
      <S.ContainerImagens>
    <img src={Bigmac} alt="Bigmac" />
    <img src={Batata} alt="Batata" />
    <img src={Sorvete} alt="Sorvete" />        
      </S.ContainerImagens>

    </section>
    <S.ContainerCards>
      <Card imagem={Banner1} texto="Que tal um #MéquiNoSofá?"/>
      <Card imagem={Banner2} texto="Venha conhecer nossa noca loja"/>
      <Card imagem={Banner3} texto="Confira as medidas que o Méqui adotou!"/>
    </S.ContainerCards>
  
  
  </S.Main>

  )
}
