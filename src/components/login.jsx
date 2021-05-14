import React, { Component } from "react";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const INITIAL_STATE = {
  Email: "",
  Password: "",
  EmailError: "",
  PasswordError: "",
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name:"",
      disable:false
    };

    this.logout = this.logout.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.login = this.login.bind(this);
    this.stopSubmission = this.stopSubmission.bind(this);
  }
  componentDidMount()
  {
    const token = localStorage.getItem('login')
    if(token)
        {
           let variable = JSON.parse(token);
           
            this.setState({disable:true});
            this.setState({name:variable.token.name})
               
        }
  }
  logout=()=> {
    localStorage.clear();
  }
  validate = () => {
    let PasswordError = "";
    let EmailError = "";

    if (!this.state.Password) {
      PasswordError = " Password cannont be blank";
    }
    if (!this.state.Email) {
      EmailError = "Email cannont be empty";
    }

    if (PasswordError || EmailError) {
      this.setState({ PasswordError, EmailError });
      return false;
    }
    return true;
  };

  stopSubmission = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(INITIAL_STATE);
    }
  };

  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`${"http://localhost:8081"}/user/login`, data).then((res) => {
      console.log(data);
      console.log(res);
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: true,
          token: res.data,
        })
      );
      this.setState({
        email: "",
        password: "",
      });
      //this.props.history.push('/')
    });
    // .catch(
    //   err => {
    //     this.setState({
    //       message: err.response.data.message
    //     })
    //     localStorage.removeItem('login')
    //   }
    // );
    console.log("Logged in Details:");
  };
  render() {
    return (
      <div className="row">
        {this.state.disable === false? 
        <form className="form-inline" style={{width:"80%"}} onSubmit={this.stopSubmission}>
        {/* <div className="col-md-3"> */}
          <div className="form-group">
            {/* <span> */}
              <label htmlFor="email">Email </label>{" "}
              <input
                type="email"
                className="form-control"
                placeholder="Enter Mail ID.."
                aria-required="true"
                name="email"
                role="textbox"
                aria-haspopup="true"
                aria-label="EmailId"
                // tabIndex={2}
                value={this.state.email}
                onChange={this.emailHandler}
                required/>{"  "}
            
            <div className="text-danger">{this.state.emailError}</div>
             </div> 
             {" "}<div className="form-group">
            <label htmlFor="password">Password </label>{ " "}
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              title = "password"
              aria-required="true"
              name="password"
              role="textbox"
              tabIndex={2}
              value={this.state.password}
              onChange={this.passwordHandler}
              required
            />
           
            <div className="text-danger">{this.state.passwordError}</div>
            </div>
            {" "}<div className="form-group">
            <Link to="/myAccount">
              <button
                type="submit"
                className="btn btn-default"
                role="button"
                tabIndex={2}
                onClick={this.login}
                disabled={!this.state.password}
              >
                Login
              </button>
            </Link>
          {/* </span> */}
          </div>
        </form>:
        <div className="pull-right" style={{marginBottom:"-50px"}}>
          <h4 >Welcome, {this.state.name}</h4>
          <Link to="/">
              <button onClick={this.logout} className="btn btn-primary">
               Logout
                </button>      
              </Link></div>
              }
      </div>
    );
  }
}

export default Login;
