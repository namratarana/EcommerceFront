import React, { Component } from 'react';
import Navbar from './navbar';
import Subheader1 from './subheader1';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.removeItemLocal = this.removeItemLocal.bind(this);
  }
  componentDidMount(){
    this.setState({cartItems: JSON.parse(localStorage.getItem('cart'))})
  }
  
  removeItemLocal= async(Id)=>{
    
    await  this.setState({cartItems:this.state.cartItems.filter((Item)=> Item.Id !== Id)})
      if(this.state.cartItems.length ===0)
      {
        localStorage.removeItem('cart');
        return true;
      }
      else
      {
        localStorage.setItem('cart',JSON.stringify(this.state.cartItems))
      }
      console.log(this.state.cartItems);
    //localStorage.setItem('cart',this.state.cartItems);
      //localStorage.setItem('cart',JSON.stringify(this.state.cartItems))
  }

  render() {
    console.log("my Cart", this.state.cartItems);
    if(this.state.cartItems ===null)
    {
     return <div className ="text-center text-danger"> <h3>Your cart is empty!</h3></div>;
    }
    else{
    
    return (
      <div>
        <Subheader1/>
         <Navbar/>
      <div className="modal-body">
       
        <div>
          <table className="table">
            <thead>
              <tr>
                <th tabIndex={1}><a href="#">Product Name</a></th>
                {/* <th tabIndex={1}><a href="#">Product Quantity</a></th> */}
                <th tabIndex={1}>Product Price</th>
                <th tabIndex={1}>Remove</th>
              </tr>
            </thead>
            <tbody id="show-cart">
              {
                
                this.state.cartItems.map(
                  items =>{ return(
                    // {console.log(items)}
                    <tr key={items.Id} >
                      <td>{items.Name}</td>
                      {/* <td>{items.Quantity}</td> */}
                      <td>${items.Price}</td>

                      <td>
                        <button onClick={()=>{this.removeItemLocal(items.Id)}}  className="btn btn-info btn-sm" >Remove</button>

                      </td>
                    </tr>
                  
                   ) }
                )
                
              }
                    

    
            </tbody>
          </table>
          {/* <p tabIndex={1}>Total Cost:<span id="total-cart" /></p> */}
        </div>
      </div>
      </div>
    );}
  }
}

export default Cart;