import React from 'react';
import styled from 'styled-components'

const ProductCardContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;

    @media (min-width:1400px) {
        width:20%; 
    }
`

const TitleName = styled.h4`
    margin:15px 0;
`

const ValueProduct = styled.p`
    margin:0;
    margin-bottom:10px;
`

const ButtonStyle = styled.button`
    background:  #A199D3;
    border: none;
    padding: 20px;
    font-size: 20px;
    color: white;
    border-radius:50% 50% 0 0;
    transition: all 0.5s;
    cursor: pointer;
    :focus{
        outline:none;
        background: #6e6994;
    }

    :hover{
        padding-right: 25px;
        opacity: 1;
        right: 0;
    }
`

const Span = styled.span`
    :after {
        opacity: 0;
        right: -20px;
        transition: 0.5s;
}
`

const DivStyle = styled.div`
    width:250px;
    color:white;
    display:flex;
    background: #282057;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    border-radius:0 0 50px 50px;
    border:5px solid #A199D3;
    box-shadow: 5px 5px 5px black;
`

const ImgStyle = styled.img`
    width:250px;
    height:250px;
    border-radius:50% 50% 0 0;
    border:5px solid #A199D3;
    box-shadow: 5px 5px 5px black;
    
`

export class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            statusButton: true
        }
    }

    AddToCart = (CardValues) => {
        const interruptor = !this.state.statusButton
        this.setState({ statusButton: interruptor })
        this.props.ReceiveRotate(interruptor)

        this.props.SendChildFunction(CardValues)
    }

    render() {
        const CardValues = {
            ProductId: Date.now(),
            ProductUrl: this.props.UrlImg,
            ProductName: this.props.Name,
            ProductPrice: this.props.Value,
            ProductQuantity: 1,
            ProductVisible: true,
        }

        return (
            <ProductCardContainer>
                <ImgStyle src={CardValues.ProductUrl} alt="" />
                <DivStyle>
                    <TitleName>{CardValues.ProductName}</TitleName>
                    <ValueProduct>R$ {CardValues.ProductPrice}</ValueProduct>
                    <ButtonStyle onClick={() => this.AddToCart(CardValues)}><Span>Comprar</Span></ButtonStyle>
                </DivStyle>
            </ProductCardContainer>
        )
    }
}
