import { Component } from "react";

class Footer extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <footer>
                    <p>MyStore Copyright © 2015 - <a href="" tabIndex={14}>Terms</a> · <a href="" tabIndex={14}>Privacy</a></p>
                </footer>
            </div>
        );
    }
}
export default Footer;