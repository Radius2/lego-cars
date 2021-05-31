import {useMediaQuery} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components'
import {Button} from '../styledComponents/Components';
import Dealership from './Dealership';
import NarrowDealership from './NarrowDealership';

const AppBar = styled.div`
display: flex;
justify-content: space-between;
padding: 0 ${({theme}) => theme.spacing(2) + 'px'};
height: 50px;
width: 100%;
background: ${({theme}) => theme.color.primary.main};
>*{
color:${({theme}) => theme.color.primary.text};
}
`
const InfoContainer = styled.div`
flex-grow: 1;
display: flex;
justify-content: flex-start;
`

const ButtonContainer = styled.div`
height: 100%;
align-self: flex-end;
display: flex;
`


const blockData = [
    {
        name: `ДЦ “Эксперт Авто Оренбург”`,
        address: 'г. Оренбург, шоссе Оренбург-Орск 13-й км.',
        phone: `8 (353) 299-00-99`,
    },
]


export default function Header() {
    const [dealerships, setDealerships] = useState(blockData)
    const narrow = useMediaQuery('(max-width:1300px)');

    return (<>
            <AppBar>
                <InfoContainer>
                {dealerships.map((dealership, index) => (
                    narrow || dealerships.length > 1 ?
                        <NarrowDealership key={index} {...dealership}/> :
                        <Dealership key={index} {...dealership}/>))
                }
                </InfoContainer>
                <ButtonContainer>
                    <Button width='180px' type='primary' contrast='dark'>Записаться на сервис</Button>
                    <Button width='180px' type='primary' contrast='light'>Заказать звонок</Button>
                </ButtonContainer>
            </AppBar>
            <Button onClick={() => setDealerships(prev => ([...prev, ...blockData]))}>Добавить дилера</Button>
            <Button onClick={() => setDealerships(prev => prev.splice(0, prev.length - 1))}>Удалить дилера</Button>
        </>
    )
}