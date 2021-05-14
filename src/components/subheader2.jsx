import { Component } from "react";
import Login from './login';
class Subheader2 extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="container"> 
            <header role="menubar">
            <div className="row">
              <div className="col-md-4 col-md-12" id="header" tabIndex={1}>
                <a href="index.html" role="link">
                  <h1 className="logo" role="log"><i className="glyphicon glyphicon-tag" /> DCX-App <span className="primary">Store</span></h1>
                  <p className="subtext">BootStrap Ecommerce Template</p>
                </a>
              </div>
              <div class="col-md-8 col-sm-12"><Login/></div>
            </div>
            </header>
            </div>

        );
    }
}
export default Subheader2;