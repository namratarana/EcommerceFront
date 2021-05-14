import { Component } from "react";
import Navbar from "./navbar";
import Product from "./product";
import Subheader2 from "./subheader2";

class ProductDisplay extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <Subheader2/>
                <Navbar/>
                <Product/>
            </div>
        );
    }
}
export default ProductDisplay;