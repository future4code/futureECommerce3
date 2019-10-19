import React from 'react';
import styled from 'styled-components'
import { Cart } from './Components/Cart';
import { Products } from './Components/Products';

const AppContainer = styled.div`
  background: #080828;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          name: 'Gama Normídeos',
          value: 700.00,
          imageUrl: "https://i.imgur.com/RjBHW1r.jpg",
        }, {
          id: 2,
          name: 'Alfa Centaurídeos',
          value: 180.00,
          imageUrl: 'https://i.imgur.com/iTePA4H.jpg'
        }, {
          id: 3,
          name: 'Quadrântidas',
          value: 300.00,
          imageUrl: 'https://i.imgur.com/CPCEwDI.jpg',
        }, {
          id: 4,
          name: 'Líridas',
          value: 100.00,
          imageUrl: 'https://i.imgur.com/7D8ehfG.jpg',
        }, {
          id: 5,
          name: 'Pi Pupídeos',
          value: 1000.00,
          imageUrl: 'https://i.imgur.com/YkoDAp1.jpg',
        }, {
          id: 6,
          name: 'Eta Aquáridas',
          value: 600.00,
          imageUrl: 'https://i.imgur.com/Sm1MVSp.jpg',
        }, {
          id: 7,
          name: 'Eta Líridas',
          value: 830.00,
          imageUrl: 'https://i.imgur.com/usHyA7W.jpg',
        }, {
          id: 8,
          name: 'Perseidas',
          value: 420.00,
          imageUrl: 'https://i.imgur.com/oto06qU.jpg',
        }
      ],
      listCart: [],
      windowCart: false,
      filterInput: "",
      filterSelect: "",
    }
  }

  componentDidMount() {
    const loadStorage = JSON.parse(window.localStorage.getItem("SavedCartList"))
    if (loadStorage) {
      this.setState({ listCart: loadStorage })
    }
  }

  componentDidUpdate() {
    const saveStorage = JSON.stringify(this.state.listCart)
    window.localStorage.setItem("SavedCartList", saveStorage)
  }

  SavetoStateListCart = (List) => {

    const PositionProduct = this.state.listCart.findIndex((Item) => {

      return List.ProductName === Item.ProductName
    })
    if (PositionProduct > -1) {
      const CopyList = [...this.state.listCart]
      CopyList[PositionProduct].ProductQuantity += List.ProductQuantity
      this.setState({ listCart: CopyList })
    } else {
      this.setState({ listCart: [...this.state.listCart, List] })
    }
  }

  SaveToState = (what) => {
    this.setState(what)
  }

  RenderCart = () => {
    if (this.state.windowCart) {
      return <Cart SaveToState={this.SaveToState} SendList={this.state.listCart} />
    }
  }
  render() {
    const NumberCart = this.state.listCart.reduce((PrevItem, Item) => {
      return Number(PrevItem) + Number(Item.ProductQuantity)
    }, 0)

    return (
      <AppContainer>
        <Products ListCartSize={NumberCart}
          SaveStateListCart={this.SavetoStateListCart}
          ListCart={this.state.listCart}
          AllProducts={this.state.products}
          InputFilterValue={this.state.filterInput}
          SelectFilterValue={this.state.filterSelect}
          SaveState={this.SaveToState} />
        {this.RenderCart()}
      </AppContainer>
    )
  }
}

export default App;
