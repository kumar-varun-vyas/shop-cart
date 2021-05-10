
import './App.css';
import React from 'react';
import data from './data.json';
import Products from './components/products';
import Filter from './components/Filter';
import products from './components/products';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products : data.products,
      size : '',
      sort: ''
    }
    this.filterProducts = this.filterProducts.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
  }

  sortProducts(event){
    console.log(event.target.value);
    const sort = event.target.value
    this.setState({
      sort: sort,
      products: data.products.slice().sort((a,b) =>(
        sort === "lowest"?
        ((a.price >b.price)?   1: -1):
        sort === "highest"?
        ((a.price < b.price)?1 :-1):
        ((a.id < b.id)?1 :-1)
      ))
    })
  }

  filterProducts(event){
    console.log(event.target.value);
    if( event.target.value ===""){
      this.setState({size: event.target.value , products :data.products})
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter(product=> product.availableSizes.indexOf(event.target.value)>=0)
      })
    }
    
  }

  render(){
  return (
    <div className="grid-container">
        <header>
          <a href ="/" >React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className= "main">
              <Filter count ={this.state.products.length}
              size ={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts = {this.sortProducts}/>
              <Products products = {this.state.products}/>
            </div>
            <div className="sidebar">cart items</div>
          </div>
        </main>
        <footer>
          All Rights are reserved
        </footer>
    </div>
  );
  }
}

export default App;
