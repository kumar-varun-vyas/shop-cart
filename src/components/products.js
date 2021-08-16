import React, { Component } from 'react'
import formatCurrency from '../utile'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal';
import './products.css'
import {connect} from "react-redux";
import  {fetctProducts}  from '../redux/Actions/ProductActions';

 class products extends Component {
    constructor(props){
        super(props);
        this.state={
            product: null,
        }
    }

    componentDidMount(){
        this.props.fetctProducts();
    }
    openModal =(product) =>{
        this.setState({product});
    }
    closeModal = () =>{
        this.setState({product: null})
    }
    render() {
        const {product} =this.state; 
        return (
            <div>
                <Fade bottom cascade ={true}>
              
                    {
                        !this.props.products ? (<div>...Loading</div>) :
                        <ul className ="products">{
                        this.props.products.map(product=>(
                            <li key ={product.id} >
                                <div className="product">
                                    <a href={"#"+ product.id} 
                                    onClick={()=>{this.openModal(product)}} > 
                                        <img src={product.image} alt="product image" />
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className ="product-price">
                                        <div>
                                             {formatCurrency(product.price)}
                                        </div>
                                        <button onClick={()=>this.props.addToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>    
                            </li>

                        ))
                 }
            </ul>
        }
                 
                    
             
                </Fade>
                {product && 
                <Modal isOpen={true} onRequestClose= {this.closeModal}>
                  <Zoom>
                      <button  onClick ={this.closeModal} >X</button>
                     <div className ="product-datails" alt>
                        <img src = {product.image} ></img>
                     </div>
                    </Zoom>  
                </Modal>}
            </div>
        )
    }
}

export default connect((state)=>({products: state.products.items}), {fetctProducts})(products)