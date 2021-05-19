import React, { Component } from "react";
import Product from "./product";
import Subheader2 from "./subheader2";
import Navbar from "./navbar";
import ecommService from "../services/ecommService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { spProd: [] };
  }

  componentDidMount() {
    ecommService.getSpProduct().then((res) => {
      this.setState({ spProd: res.data.sp });
      console.log(this.state.spProd[0].Image);
    });
  }
  render() {
    return (
      <div>
        <Subheader2 />
        <Navbar />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags must come first in the head; any other head content must come after these tags */}
        <title>Ecommerce Template</title>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:700"
          rel="stylesheet"
        />
        {/* Bootstrap core CSS */}
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/slider.css" />
        {/* Custom styles for this template */}
        <link href="css/style.css" rel="stylesheet" />

        {/* Container */}

        {/*  Carousel*/}
        <div id="myCarousel" className="carousel slide " data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              {" "}
              <img
                className="first-slide image-responsive"
                src="img/images/camera1.png"
                alt="DSLR Camera for sale"
                tabIndex={3}
              />
              <div className="container">
                <div className="carousel-caption text-center">
                  <h1 tabIndex={3}>DSLR D3100</h1>
                  <p tabIndex={3}>
                    An entry level digital-SLR camera with a new CMOS image
                    sensor, image-processing engine and helpful Guide mode that
                    makes capturing beautiful images easy.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="javascript:void(0);"
                      role="button"
                      tabIndex={3}
                    >
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              {" "}
              <img
                className="second-slide"
                src="img/images/oneplus5.png"
                alt="OnePlus five flash scale. Buy Now !"
                tabIndex={3}
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1 tabIndex={3}>
                    OnePlus 5 (Slate Gray 6GB RAM + 64GB memory)
                  </h1>
                  <p tabIndex={3}>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="javascript:void(0);"
                      role="button"
                      tabIndex={3}
                    >
                      Buy Now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              {" "}
              <img
                className="third-slide"
                src="img/images/tv3.png"
                alt="QLED TV on the presentation"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1 tabIndex={3}>One more for good measure.</h1>
                  <p tabIndex={3}>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="javascript:void(0);"
                      role="button"
                      tabIndex={3}
                    >
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            {" "}
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />{" "}
            <span className="sr-only">Previous</span>{" "}
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            {" "}
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />{" "}
            <span className="sr-only">Next</span>{" "}
          </a>
      
        </div>
        {/* /.carousel */}
        {/* Main component for a primary marketing message or call to action */}
        <div className="jumbotron" id="myJumbotron" role="article">
       
              <ul className="tablist" role="tablist">
                <li role="presentation" className="active"><a href="#1" aria-controls="featured" role="tab" data-toggle="tab" tabIndex={4}>Featured Item</a></li>
                <li role="presentation"><a href="#2" aria-controls="best" role="tab" data-toggle="tab" tabIndex={5}>Best Seller</a></li>
                <li role="presentation"><a href="#3" aria-controls="discount" role="tab" data-toggle="tab" tabIndex={6}>Summer Discount</a></li>
                <li role="presentation"><a href="#4" aria-controls="premium" role="tab" data-toggle="tab" tabIndex={7}>Premium Product</a></li>
                <li role="presentation"><a href="#5" aria-controls="gift" role="tab" data-toggle="tab" tabIndex={8}>Gift Idea</a></li>
              </ul>
              
             
              <div className="tab-content">
              { this.state.spProd.map( sp =>
              
                <div role="tabpanel" className="tab-pane active" id={sp.Id}>
                  <div className="tab-text" tabIndex={4}>
                    <h2>Apple iPhone 6</h2>
                    <p>
                      {sp.Description}
                    </p>{" "}
                    <a href="product.html" className="btn btn-default" tabIndex={4}>
                      Read More
                    </a>{" "}
                  </div>{" "}
                  <img
                    className="slide-img"
                    src={sp.Image}
                    alt="Apple iPhone 6"
                    role="img"
                  />
              
                </div>
              
               )}
          </div>
         
        </div>

        <Product />
      </div>
    );
  }
}
export default Home;