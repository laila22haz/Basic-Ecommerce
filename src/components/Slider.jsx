import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
//import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
//import img6 from "./images/img6.jpg";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100"/>
          </div>
          
          <div className="carousel-item">
            <img src={img4} className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100"/>
          </div>
          
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
