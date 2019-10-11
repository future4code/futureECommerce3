import React from 'react';
import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import { keyframes } from 'styled-components'

const DivWindow = styled.div`
    display: flex;
    width:95%;
    flex-direction: column;
    align-items:center;
`

const ProductsContainer = styled.div`
    background: #283088;
    display: flex;
    width:95%;
    min-height:calc(100vh - 5vh);
    align-items: center;
    flex-wrap:wrap;
    justify-content: space-evenly;
    border-right:2px solid white;
    border-left:2px solid white;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const FontStyle = styled.p`
  color:white;
  margin: 20px 0;
  font-weight:bold;
  font-size: 20px;
`

const DivFlex = styled.div`
    display: flex;
`

const InputStyle = styled.input`
    margin-left: 20px;
    border-radius: 10px;
    color:#283088;
    padding:2%;
    :focus{
        outline: none;
    }
`

const DivOpenCart = styled.div`
    position: fixed;
    background:transparent;
    height:75px;
    width:80px;
    bottom:50px;
    right:1.3%;
    cursor:pointer;
`

const ImgCart = styled.img`
    width: 70px;
    height:70px;
    animation: ${props => props.Girar} 1s linear;
`


const FontStyleCart = styled.p`
  color:white;
  font-size:18px;
  font-weight:bold;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0;
  margin:0;
`

const DivNumberCart = styled.div`
    position: absolute;
    background: #282057;
    bottom:0;
    width:25px;
    height:25px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid black;
`

const SelectStyle = styled.select`
    margin-left: 20px;
    border-radius: 10px;
    color:#283088;
    padding:2%;
    :focus{
        outline: none;
    }
`


const ImgStyle = styled.img`
    width: 40px;
    margin:0 20px;
    padding-bottom:10px;
`

const DivFilter = styled.div`
    height:5vh;
    background:#A199D3;
    width:95%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 2% 0;
    border-right:2px solid white;
    border-left:2px solid white;
`

export class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonState: true,
            rotate: false,
        }
    }

    ReceiveChild = (DateValue) => {
        this.props.SaveStateListCart(DateValue)
    }

    ChangeInputValue = (event) => {
        const ValueChanged = { filterInput: event.target.value }
        this.props.SaveState(ValueChanged)
    }

    ChangeSelectValue = (event) => {
        const ValueChanged = { filterSelect: event.target.value }
        this.props.SaveState(ValueChanged)
    }

    RenderImageExpensive = () => {
        this.setState({ buttonState: !this.state.buttonState })
    }

    OpenCart = () => {
        this.props.SaveState({ windowCart: true })
    }

    ReceiveRotatefromCard = (Anything) => {

        this.setState({ rotate: Anything })
    }

    render() {

        let Rotate

        if (this.state.rotate) {
            Rotate = rotate
        } else {
            Rotate = rotate
        }

        let CartImg

        if (this.props.ListCartSize < 1) {
            CartImg = require('../img/vazia.png')
        } else {
            CartImg = require('../img/cheia.png')
        }

        const ProductList = this.props.AllProducts

        let SortValue

        if (this.state.buttonState) {
            SortValue = ProductList.sort((b, a) => (a.value > b.value) ? 1 : -1)
        } else {
            SortValue = ProductList.sort((a, b) => (a.value > b.value) ? 1 : -1)
        }

        const FilterProducts = SortValue.filter((Product) => {
            if (this.props.SelectFilterValue === "ProdMax") {
                return Product.value < this.props.InputFilterValue
            } else if (this.props.SelectFilterValue === "ProdMin") {
                return Product.value > this.props.InputFilterValue
            } else if (this.props.SelectFilterValue === "ProdName") {
                return Product.name.indexOf(this.props.InputFilterValue) > -1
            } else {
                return Product
            }
        })

        const MapProducts = FilterProducts.map((Item) => {
            return <ProductCard ReceiveRotate={this.ReceiveRotatefromCard} SendChildFunction={this.ReceiveChild} key={Item.id} Name={Item.name} Value={Item.value} UrlImg={Item.imageUrl} Id={Item.id} AllProducts={ProductList} />
        })

        let ImgChangedExpensive
        if (this.state.buttonState) {
            ImgChangedExpensive = "https://image.flaticon.com/icons/svg/138/138280.svg"
        } else {
            ImgChangedExpensive = "https://image.flaticon.com/icons/svg/755/755195.svg"
        }



        return (
            <DivWindow>
                <DivFilter>
                    <DivFlex>
                        <SelectStyle value={this.props.SelectFilterValue} onChange={this.ChangeSelectValue}>
                            <option value="Nothing">Filtrar</option>
                            <option value="ProdMin">Valor Mínimo</option>
                            <option value="ProdMax">Valor Máximo</option>
                            <option value="ProdName">Nome do Produto</option>
                        </SelectStyle>
                        <InputStyle type="text" value={this.props.InputFilterValue} onChange={this.ChangeInputValue} />
                    </DivFlex>
                    <DivFlex>
                        <FontStyle>ordernar preço por: </FontStyle>
                        <ImgStyle onClick={this.RenderImageExpensive} src={ImgChangedExpensive} alt="" />
                    </DivFlex>
                </DivFilter>
                <ProductsContainer>
                    {MapProducts}
                </ProductsContainer>
                <DivOpenCart onClick={this.OpenCart}>
                    <DivNumberCart>
                        <FontStyleCart>{this.props.ListCartSize}</FontStyleCart>
                    </DivNumberCart>
                    <ImgCart Girar={Rotate} src={CartImg} alt="logo do carrinho" />
                </DivOpenCart>
            </DivWindow>
        )
    }
}

