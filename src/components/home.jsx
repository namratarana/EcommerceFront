import React, {Component} from 'react';
import Product from './product';
import Subheader2 from './subheader2';
import Navbar from './navbar';

class Home extends Component
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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        <title>Ecommerce Template</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet" />
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
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active"> <img className="first-slide image-responsive" src="img/images/camera1.png" alt="DSLR Camera for sale" tabIndex={3} />
                <div className="container">
                  <div className="carousel-caption text-center">
                    <h1 tabIndex={3}>DSLR D3100</h1>
                    <p tabIndex={3}>An entry level digital-SLR camera with a new CMOS image sensor, image-processing engine and helpful Guide mode that makes capturing beautiful images easy.</p>
                    <p><a className="btn btn-lg btn-primary" href="javascript:void(0);" role="button" tabIndex={3}>Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div className="item"> <img className="second-slide" src="img/images/oneplus5.png" alt="OnePlus five flash scale. Buy Now !" tabIndex={3} />
                <div className="container">
                  <div className="carousel-caption">
                    <h1 tabIndex={3}>OnePlus 5 (Slate Gray 6GB RAM + 64GB memory)</h1>
                    <p tabIndex={3}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="javascript:void(0);" role="button" tabIndex={3}>Buy Now!</a></p>
                  </div>
                </div>
              </div>
              <div className="item"> <img className="third-slide" src="img/images/tv3.png" alt="QLED TV on the presentation" />
                <div className="container">
                  <div className="carousel-caption">
                    <h1 tabIndex={3}>One more for good measure.</h1>
                    <p tabIndex={3}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="javascript:void(0);" role="button" tabIndex={3}>Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/*Controls*/}
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" /> <span className="sr-only">Previous</span> </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> <span className="sr-only">Next</span> </a>
            {/*!Controls*/}
          </div>
          {/* /.carousel */}
          {/* Main component for a primary marketing message or call to action */}
          <div className="jumbotron" id="myJumbotron" role="article">
            {/* Nav tabs */}
            <ul className="tablist" role="tablist">
              <li role="presentation" className="active"><a href="#featured" aria-controls="featured" role="tab" data-toggle="tab" tabIndex={4}>Featured Item</a></li>
              <li role="presentation"><a href="#best" aria-controls="best" role="tab" data-toggle="tab" tabIndex={5}>Best Seller</a></li>
              <li role="presentation"><a href="#discount" aria-controls="discount" role="tab" data-toggle="tab" tabIndex={6}>Summer Discount</a></li>
              <li role="presentation"><a href="#premium" aria-controls="premium" role="tab" data-toggle="tab" tabIndex={7}>Premium Product</a></li>
              <li role="presentation"><a href="#gift" aria-controls="gift" role="tab" data-toggle="tab" tabIndex={8}>Gift Idea</a></li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="featured">
                <div className="tab-text" tabIndex={4}>
                  <h2>Apple iPhone 6</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p> <a href="product.html" className="btn btn-default" tabIndex={4}>Read More</a> </div> <img className="slide-img" src="img/iphone.png" alt="Apple iPhone 6" role="img" /> </div>
              <div role="tabpanel" className="tab-pane" id="best">
                <div className="tab-text" tabIndex={5}>
                  <h2>Xbox One</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p> <a href="product.html" className="btn btn-default" tabIndex={5}>Read More</a> </div> <img className="slide-img" src="img/xbox.png" alt="Xbox" role="img" /> </div>
              <div role="tabpanel" className="tab-pane" id="discount">
                <div className="tab-text" tabIndex={6}>
                  <h2>Playstation 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p> <a href="product.html" className="btn btn-default" tabIndex={6}>Read More</a> </div> <img className="slide-img" src="img/ps4.png" alt="PS4" role="img" /> </div>
              <div role="tabpanel" className="tab-pane" id="premium">
                <div className="tab-text" tabIndex={7}>
                  <h2>Microsoft Surface</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p> <a href="product.html" className="btn btn-default" tabIndex={7}>Read More</a> </div> <img className="slide-img" src="img/surface.png" alt="LapTop Image" role="img" /> </div>
              <div role="tabpanel" className="tab-pane" id="gift">
                <div className="tab-text" tabIndex={8}>
                  <h2>Vizio Smart TV</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p> <a href="product.html" className="btn btn-default" tabIndex={8}>Read More</a> </div> <img className="slide-img" src="img/tv.png" alt="Vizio smart tv" role="img" /> </div>
            </div>
          </div>
          <Product/>
        </div>
        
      
      )
    }
}
export default Home;