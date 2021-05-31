import React from 'react';
import styled from 'styled-components';
import {Button} from '../styledComponents/Components';

const Name = styled.p``
const Address = styled.p``
const Rout = styled(Button)``
const IconBtn = styled.div`
border-radius: ${({theme})=>theme.borderRadius}px;
margin:  0 ${({theme})=>theme.spacing(1)}px;
height: 30px;
width: 30px;
background-image: url("${({url})=>url}");
background-repeat: no-repeat;
background-position: center;
`
const Phone = styled.p``
const Social = styled(Button)`
@media (max-width: 1700px){
display: none;
}
>${IconBtn}{
background-color: rgba(255,255,255,0.1) ;
}
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
>* {
  margin: 0 ${({theme}) => theme.spacing(1) + 'px'};
  font-weight: 400;
  font-size: 14px;
}
${Name}{
  font-size: 16px;
  font-weight: 500;
};
${Address}{
opacity: 0.7;
}
${Rout}{
}
${Phone}{
font-size: 16px;
  font-weight: 500;
}
`


export default function Dealership(props) {
    const {name, address, phone} = props
    return (
        <Container>
            <Name>{name}</Name>
            <Address>{address}</Address>
            <Rout type='primary'><IconBtn url="https://img.icons8.com/metro/20/ffffff/compass.png"/>Проложить маршрут</Rout>
            <Phone>{phone}</Phone>
            <Social type='primary'><IconBtn url="https://img.icons8.com/ios/20/ffffff/viber--v1.png"/>Viber</Social>
            <Social type='primary'><IconBtn url="https://img.icons8.com/ios/20/ffffff/whatsapp--v1.png"/>What's App</Social>
            <Social type='primary'><IconBtn url="https://img.icons8.com/ios/20/ffffff/telegram-app.png"/>Telegram</Social>
        </Container>
    )
}