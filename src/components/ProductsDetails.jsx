import { Component } from "react";
import EcommService from "../services/ecommService";
import Navbar from "./navbar";
import ProductDisplay from "./productDisplay";

class ProductDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            Id:this.props.match.params.id,
            Name:'',
            Image:'',
            Description:'',
            Price:''
        }

    }

    componentDidMount()
    {
   
      console.log("hello" ,this.state.Id);
      EcommService.getProductDetails(this.state.Id).then((res) => 
      {
            let prod = res.data.message[0];
            this.setState(
              {
                Name:prod.Name,
                Image:prod.Image,
                Description:prod.Description,
                Price:prod.Price
              })
              console.log("Product "+JSON.stringify(prod));
      })
    }
    render()
    {
        return(
            <div>
              <Navbar/>
              <section>
                <div className="row">
                  <link href="css/bootstrap.css" rel="stylesheet" />
                    <div className="col-md-8">
                      <div className="row">
                          <div className="col-md-4">
                            <p id="image" />
                            {console.log("Hi")}
                            <img src={`/${this.state.Image}`} alt="Galaxy S5" class="img-responsive"></img>
                          </div>
                          <div className="col-md-8 ">
                            <h2 tabIndex={1} id="name" />
                            <div className="price" tabIndex={1} id="price" />
                          <hr />
                          <p tabIndex={1}> Quanity:
                            <select className="form-control" name="quanity" tabIndex={1}>
                              <option value={1}>1</option>
                              <option value={1}>2</option>
                              <option value={1}>3</option>
                              <option value={1}>4</option>
                              <option value={1}>5</option>
                            </select>
                          </p>
                          <a href="javascript:void(0);" className="btn btn-success" tabIndex={1}> Buy Now</a>
                          <br /><br /><br />
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                  <h4 className="panel-title">
                                     <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" tabIndex={1}>
                                      Description
                                    </a>
                                  </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                  <div className="panel-body" tabIndex={1}>
                                    {this.state.Description} 
                                  </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" tabIndex={1}>
                                      Specifications
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" tabIndex={1}>
                                <div className="panel-body" tabIndex={1}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <h4 className="panel-title">
                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" tabIndex={1}>
                                      Related
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" tabIndex={1}>
                                <div className="panel-body" tabIndex={1}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-md-4">
                    <div className="list-group">
                      <a href="javascript:void(0);" className="list-group-item" tabIndex={1}>Category 1</a>
                      <a href="javascript:void(0);" className="list-group-item" tabIndex={1}>Category 2</a>
                      <a href="javascript:void(0);" className="list-group-item" tabIndex={1}>Category 3</a>
                      <a href="javascript:void(0);" className="list-group-item" tabIndex={1}>Category 4</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        );
    }
}
export default ProductDetails;