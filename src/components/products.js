import React, { Component } from 'react'
import formatCurrency from '../utile'
import './products.css'

export default class products extends Component {
    render() {
        return (
            <div>
                <ul className ="products">
                    {this.props.products.map(product=>(
                        <li key ={product.id} >
                            <div className="product">
                                <a href={"#"+ product.id}>
                                    <img src={product.image} alt="product image" />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className ="product-price">
                                    <div>
                                         {formatCurrency(product.price)}
                                    </div>
                                    <button>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>    
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
