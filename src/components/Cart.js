import React, { Component } from 'react'
import formatCurrency from '../utile'
export default class Cart extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            address:"",
            showCheckout : false
        }
    }

    handleInput=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    createOrder =(e) =>{
        e.preventDefault();
        const order ={
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
    }

    render() {
        const {cartItems} =this.props;
        return (
            <>
            <div>
                {cartItems.length === 0 ? (<div className =" cart cart-header">Cart is empety</div>)
                : (
                    <div className = "cart cart-header">
                        You have {cartItems.length} in the cart {" "}
                    </div> 
                )

            
            }
            </div>
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map(item=>(
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title}></img>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {formatCurrency(item.price)} x {item.count}  {" "}
                                    <button onClick={()=>this.props.removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length!==0 && (
                <div className ="cart">
                    <div className="total" >
                        Total : {" "}
                        {formatCurrency( cartItems.reduce((a,c)=> a+ c.price * c.count ,0))}
                      
                        <button 
                            onClick={()=> this.setState({showCheckout: true})}
                            className="primary">Proceed</button>
                    </div>
                </div>
            ) }
            {this.state.showCheckout &&
                <div className ="cart">
                  <form onSubmit= {this.createOrder} >
                      <ul className ="form-container">
                            <li>
                              <label>Name </label>
                             
                              <input name="name" type="text" required onChange ={this.handleInput} />
                          </li>
                          <li>
                              <label>Email</label>
                             
                              <input name="email" type="email" required onChange ={this.handleInput} />
                          </li>
                          <li>
                              <label>Address</label>
                             
                              <input name="address" type="text" required onChange ={this.handleInput} />
                          </li>
                          <li>
                              <button className="primary" type="submit">Checkout</button>
                          </li>
                      </ul>
                  </form>
                </div>
            }    
           
            </>
        )
    }
}
