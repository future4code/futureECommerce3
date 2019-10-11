import React from 'react';
import styled from 'styled-components'

const BackgroundContainer = styled.div`
    position: fixed;
    width:100vw;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:rgba(0,0,0,0.8);
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
    grid-template-columns: repeat(2,1fr) 30px;
`

const FlexGrid = styled.div`
    width: 95%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:50px;

`


const ImgStyle = styled.img`
    width:30px;
    cursor:pointer;
`


export class Cart extends React.Component{
  constructor(props){
    super(props)
      this.state = {
      }
    
  }

  DeleteCartItem = (id) =>{
    const CopyListCart = [...this.props.SendList]
    const Idofid = CopyListCart.indexOf(id)
    CopyListCart.splice(Idofid,1) 
    
    this.props.SaveToState({listCart: CopyListCart})
  }

  CloseWindow =() =>{
    this.props.SaveToState({windowCart:false})
  }
 
  render(){
    
    const TotalPrice = this.props.SendList.reduce((PrevItem, Item)=>{
      return Number(PrevItem) + Number(Item.ProductPrice)
    },0)
      
    const ListCart = this.props.SendList.map((Item)=>{
      return <GridDiv key={Item.ProductId}><GridItems>{Item.ProductName}</GridItems><GridItems>{Item.ProductPrice}</GridItems><GridItems><ImgStyle onClick={()=>this.DeleteCartItem(Item.ProductId)} src="https://image.flaticon.com/icons/svg/1632/1632602.svg" alt="delete item"/></GridItems></GridDiv>
    })


    return(
        <BackgroundContainer>
            <CartContainer>
            <FlexGrid>
              <ImgStyle onClick={this.CloseWindow} src="https://image.flaticon.com/icons/svg/189/189678.svg" alt=""/>
            </FlexGrid>
              <GridDiv>
                <GridTitle>Produto</GridTitle>
                <GridTitle>Valor</GridTitle>
                <GridTitleNoBorder></GridTitleNoBorder>
              </GridDiv>
              {ListCart}
              <GridDiv>
              <TotalItem>Total R$: {TotalPrice} </TotalItem>
            </GridDiv>
            
            </CartContainer>
        </BackgroundContainer>
    )
  }
}