import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface Props {
  img1: string;
  img2: string;
  img3: string;
  h1: string;
  h2: string;
  h3: string;
  c1: string;
  c2: string;
  c3: string;
}
const Carousel = ({ img1, img2, img3, h1, h2, h3, c1, c2, c3 }: Props) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide bg-light text-dark"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active bg-dark"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="bg-dark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="bg-dark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner text-warning">
        <div className="carousel-item active text-warning">
          <img src={img1} className="d-block w-100 text-warning" alt="..." />
          <div className="carousel-caption d-none d-md-block text-dark bg-light p-3 text-container shadow-lg">
            <h1>{h1}</h1>
            <h4>{c1}</h4>
          </div>
        </div>
        <div className="carousel-item text-warning">
          <img src={img2} className="d-block w-100 text-warning" alt="..." />
          <div className="carousel-caption d-none d-md-block text-dark bg-light p-3 text-container shadow-lg">
            <h1>{h2}</h1>
            <h4>{c2}</h4>
          </div>
        </div>
        <div className="carousel-item text-warning">
          <img src={img3} className="d-block w-100 text-warning" alt="..." />
          <div className="carousel-caption d-none d-md-block text-dark bg-light p-3 text-container shadow-lg">
            <h1>{h3}</h1>
            <h4>{c3}</h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
