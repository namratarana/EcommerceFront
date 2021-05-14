import React, { Component } from "react";
import EcommService from '../services/ecommService';
import ProductDisplay from "./productDisplay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Product extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {products:[],cartItems:[] };
        this.getProductById = this.getProductById.bind(this);
        this.addToCart = this.addToCart.bind(this);

    }
    
    componentDidMount()
    {
        EcommService.getProduct().then((res)=>{
            this.setState({products : res.data.products})
        });
        if(localStorage.getItem('cart')){
        this.setState({cartItems: JSON.parse(localStorage.getItem('cart'))})
        }
    }
    

    getProductById = (id) => {
      
      this.props.history.push(`/productdetail/${id}`);
    }
    addToCart =async (p) => { 
      await this.setState({cartItems:[...this.state.cartItems,p]})
      localStorage.setItem('cart',JSON.stringify(this.state.cartItems))
    }


  
    render()
    {
        return(
           
           
           <div>
              <link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet" />
              <link href="css/bootstrap.css" rel="stylesheet" />
              <link rel="stylesheet" href="css/slider.css" />
    
              <link href="css/style.css" rel="stylesheet" /> 
                        <section id="products" role="region">
                        <div className="row">
                        {
                            this.state.products.map(
                              prod => 
                                
              <div className="col-md-4">
                <div className="thumbnail" tabIndex={8}>
                  <div className="productImage">
                    <button id="image" value={1}>
                      <img src={prod.Image} alt="Galaxy_S5" role="img" title="Samsung Galaxy S5" data-toggle="tooltip" data-placement="left" /></button>
                  </div>
                  <div className="caption">
                    <h4 className="pull-right" tabIndex={9}>${prod.Price}</h4>
                    {/* {/<h4><a href="product1.html" tabindex="8" value="1">Samsung Galaxy S5</a></h4>/} */}
                    <h4><Link to ={`productdetail/${prod.Id}`}><button  id="product" value={1} tabIndex={8}>{prod.Name}</button></Link></h4>
                    <p tabIndex={8}>{prod.Description}</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">15 Reviews</p>
                    <p> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> </p>
                    <p><button onClick={() => this.addToCart(prod)} class="btn btn-primary add-to-cart" data-toggle="modal" data-target="#exampleModal" data-name="Microsoft Surface" data-price="399.99">Add to Cart</button></p>
                  </div>
                </div>
              </div>
              
                                
                  )}
               
              
             </div>
            
              
          </section>
           </div>
        );
    }
}

export default Product;