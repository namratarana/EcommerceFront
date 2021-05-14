import { Component } from "react";

class Header extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={bg:false}
  }
  bgDark=()=>{this.setState({bg:true})}
  bgLight=()=>{this.setState({bg:false})}
  render()
  {
    return(
          
          <div className="container ">
          {this.state.bg === true?<style>{'body {background-color:#063447 !important}'}</style>:null}
          {/* Accessibility */}
          <div className="section">
            <div className="row access">
              <div className="col-md-7 col-sm-12">
                {/* Font Size */}
                <div className="col-md-8 col-sm-6 font">
                  <ul>
                    <li>
                      <button href="#" className="btn btn-link" tabIndex={15} role="button">Font</button>
                      <div id="font" className="slider" data-min={14} data-max={30} data-step={1} />
                    </li>
                    <li>
                      <button className="btn btn-link" role="button">Gray-scale</button>
                      <div id="contrast" className="slider" data-min={0} data-max={100} data-step={1} />
                    </li>
                  </ul>
                </div>
                {/* Zoom */}
                <div className="col-md-4 col-sm-6 zoom">
                  <button className="btn btn-default" id="zoomIn" role="button"><span className="glyphicon glyphicon-zoom-in" /></button>
                  <button className="btn btn-default" id="zoomOut" role="button"><span className="glyphicon glyphicon-zoom-out" /></button>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                {/* Bold */}
                <div className="col-sm-6 boldness">
                  <button className="btn btn-link" id="bold" role="button" title="Make letter in the page Bold"><b>A</b></button>
                  <button className="btn btn-link" id="unbold" role="button" title="Make letter in the page unbold">A</button>
                </div>
                {/* Theming */}
                <div className="col-sm-6 boldness">
                  <button onClick={this.bgLight} className="btn btn-link" id="lighter" role="button" title="Page with a lighter theme">Light</button>
                  <button onClick={this.bgDark} className="btn btn-link" id="darker" role="button" title="Page with a darker theme">Dark</button>
                </div>
              </div>
            </div>
          </div>
          
          </div>
          
    );
  }
}

export default Header;