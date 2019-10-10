import React from 'react';
import styled from 'styled-components'

const BackgroundContainer = styled.div`
    position: absolute;
    width:100vw;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:rgba(0,0,0,0.7);
`

const CartContainer = styled.div`
  
  background: white;
  min-height: 50vh;
  width:50vw;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius:30px;
`

const GridTitle = styled.h4`
    background:#A088D7;
    text-align:center;
    border: 2px solid gray;
    margin-bottom:0;
`

const GridItems = styled.p`
    text-align:center;
    height:30px;
    border-bottom: 1px solid gray;
`
const GridTitleNoBorder = styled.p`
    text-align:center;
    height:30px;
`

const TotalItem = styled.h4`
    text-align:center;
    height:30px;
    border-bottom: 1px solid gray;
    font-weight:bold;
    grid-column-start: 2;
    grid-column-end: 4;

`

const GridDiv = styled.div`
    width: 90%;
    display:grid;
    grid-template-columns: repeat(3,1fr) 30px;

`


const ImgStyle = styled.img`
    width:30px;
    position:relative;
    top:10px;
    left: 45%;
`


export class Cart extends React.Component{
  constructor(props){
    super(props)
      this.state = {
      }
    // this.props.SendList
  }
  render(){
    return(
        <BackgroundContainer>
            <CartContainer>
            <ImgStyle src="https://image.flaticon.com/icons/svg/189/189678.svg" alt=""/>
            <GridDiv>
                <GridTitle>Produto</GridTitle>
                <GridTitle>Quantidade</GridTitle>
                <GridTitle>Valor</GridTitle>
                <GridTitleNoBorder></GridTitleNoBorder>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <GridItems>ola</GridItems>
                <TotalItem>Total R$: 50,00</TotalItem>
                
                
            </GridDiv>
            
            </CartContainer>
        </BackgroundContainer>
    )
  }
}