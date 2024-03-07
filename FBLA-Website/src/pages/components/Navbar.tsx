import { Link } from "react-router-dom";

interface Props {
  name: string;
  img: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
}
const Navbar = ({ name, img, li1, li2, li3, li4 }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={img}
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          ></img>
          {" " + name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                {li1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/information">
                {li2}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job-openings">
                {li3}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job-application">
                {li4}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
