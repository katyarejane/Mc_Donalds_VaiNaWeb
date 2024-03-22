import React from 'react'
import mc from '../../assets/mc.svg';
import cel1 from '../../assets/cel1.svg';
import cel2 from '../../assets/cel2.svg';
import * as S from './header_styled';


export default function Header() {
  return (
    <S.Header>
        <img src={mc} alt="mc" />
        <section>
        <div>
            <img src={cel1} alt="cel1" />
            <h3>Baixe o App</h3>
        </div>
        
        <div>            
            <h3>Peça seu Méqui</h3>
            <img src={cel2} alt="cel2" />
        </div>
        </section>
    </S.Header>
  )
}
