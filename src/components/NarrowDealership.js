import React from 'react';
import styled from 'styled-components';
import {Button} from '../styledComponents/Components';
import {Divider} from '@material-ui/core';

const AlignButton = styled(Button)`
justify-content: flex-start;
padding-left: 0;
`

const Name = styled.p``
const Address = styled.p``
const Rout = styled(AlignButton)``
const IconBtn = styled.div`
border-radius: ${({theme}) => theme.borderRadius}px;
margin-right:  ${({theme}) => theme.spacing(1)}px;
height: 30px;
width: 30px;
background-image: url("${({url}) => url}");
background-repeat: no-repeat;
background-position: center;
`
const Phone = styled.p``
const Social = styled(AlignButton)`
>${IconBtn}{
background-color: rgba(255,255,255,0.1) ;
}
`

const DropDown = styled.div`
position: absolute;
display: none;
top:0;
left:0;
`

const Container = styled.div`
position: relative;
min-width: 270px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
  &:hover {
    ${DropDown} {
    padding: ${({theme}) => theme.spacing(2)}px;
    padding-top: ${({theme}) => theme.spacing(3)}px;
    >*{margin: ${({theme}) => theme.spacing(1)}px 0;}
    display: flex;
    justify-content: space-around;
    background: ${({theme}) => theme.color.primary.light};
    flex-direction: column;
    width: 100%;
    height: max-content;
    >${Phone}{
    font-size: 24px;
    font-weight: 500;
}
  }
}

`


export default function Dealership(props) {
    const {name, address, phone} = props
    return (
        <Container>
            <Name>{name}</Name>
            <Phone>{phone}</Phone>
            <DropDown>
                Контакты салона
                <Phone>{phone}</Phone>
                <Address>{address}</Address>
                <Divider/>
                <Rout type='primary' contrast='light'><IconBtn
                    url="https://img.icons8.com/metro/20/ffffff/compass.png"/>Проложить
                    маршрут</Rout>
                <Divider/>
                <Social type='primary' contrast='light'><IconBtn
                    url="https://img.icons8.com/ios/20/ffffff/viber--v1.png"/>Viber</Social>
                <Social type='primary' contrast='light'><IconBtn
                    url="https://img.icons8.com/ios/20/ffffff/whatsapp--v1.png"/>What's
                    App</Social>
                <Social type='primary' contrast='light'><IconBtn
                    url="https://img.icons8.com/ios/20/ffffff/telegram-app.png"/>Telegram</Social>
            </DropDown>
        </Container>
    )
}