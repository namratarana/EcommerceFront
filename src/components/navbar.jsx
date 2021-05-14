import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={disable:true}
    }

    componentDidMount()
    {
        const token = localStorage.getItem('login');
        if(token)
        {
            this.setState({disable:false});
        }
    }
    render()
    {
        return(
            <div style={{backgroundImage:"url(../img/navbar.png)"}}>
                    {/* Static navbar */}
                <nav className="navbar navbar-expand-lg navbar-default" role="navigation">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" tabIndex={3}> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                </div>
                <div  id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                     {this.state.disable === true?  <li><Link to="/myAccount">My Account</Link></li>:<li><Link to="/myAccount">My Account</Link></li>}
                    <li><Link to="/signUp">Sign Up</Link></li>
                    {/* <li><Link to="/myAccount">My Account</Link></li>
                     */}
                    
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <form className="navbar-form">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search..." tabIndex={3} /> </div>
                        <button type="submit" className="btn btn-default" tabIndex={3}>Search</button>
                        {this.state.disable === true?  <button type="button" className="btn btn-primary disabled" id="cart" data-toggle="modal" data-target="#exampleModal">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>Cart
                                    </button>:
                       <Link to = "/cart"> <button type="button" className="btn btn-primary" id="cart" data-toggle="modal" data-target="#exampleModal">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>Cart
                                </button></Link>}
                    </form>
                    </ul>
                </div>
                {/*/.nav-collapse */}
                </div>
                {/*/.container-fluid */}
            </nav>
            </div>
        );
    }
}
export default Navbar;