import { Component } from "react";
import { Link } from "react-router-dom";
// import Header from './header';

class Start extends Component
{
    render()
    {
        return(
            <div>
                <Link to ="/signUp">Sign Up</Link>
                <br />
                Already have an account?
                <br />
                <Link to ="/login">Login</Link>
            </div>
        );
    }
}
export default Start;