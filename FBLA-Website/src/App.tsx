import Navbar from "./pages/components/Navbar";
import Carousel from "./pages/components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Textseg from "./pages/components/Textseg";
import "./App.css";
import Socials from "./pages/components/Socials";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import JobOpenings from "./pages/JobOpenings";
import JobApplication from "./pages/JobApplication";

function App() {
  return (
    <div className="text-bg-light p-3">
      <Router>
        <Navbar
          name="Vip Painting and Remodeling"
          img="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/277805367_392372462893937_953156666512557404_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NbibbUlCWGQAX-HAGYU&_nc_ht=scontent-lga3-2.xx&oh=00_AfAEl9CqCuDSLsBPZXPYGV4NQhJTsX495yssCnzWA5u-4g&oe=65EEF44B"
          li1="Home"
          li2="Information"
          li3="Job Openings"
          li4="Job Application"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/job-openings" element={<JobOpenings />} />
          <Route path="/job-application" element={<JobApplication />} />
        </Routes>
        <br />
        <Carousel
          img1="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275157245_2111832412304600_8868708825337694914_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WrzjUfdPssoAX8futnF&_nc_ht=scontent-lga3-1.xx&oh=00_AfDSMMz8gOXxM0BbxetNknTCJxAxTdK-vINfUO1Av6ETCA&oe=65EEE776"
          h1="New Front Door"
          c1="New Beautiful Front Door! Painted with a special mix satin black by us!"
          img2="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275180446_2111834542304387_8079666676413421072_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FYw9E7yNB8cAX9JHN8I&_nc_ht=scontent-lga3-1.xx&oh=00_AfBO4gIAbAozrPiqc5GQrylxXPbEiTYfVFELHWG60nBzsQ&oe=65EED8D7"
          h2="Fiberglass Door Restoration"
          c2="At this job, we made this fiberglass door look like brand new wood!"
          img3="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/121165446_1702871706534008_2264854650268963329_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tijvj-3_5DsAX8gRRXl&_nc_ht=scontent-lga3-2.xx&oh=00_AfBZvjHMJAmpgYihYnkPOBXP1RlRjou9Ni5PiZJxL5NAzQ&oe=6610CAF9"
          h3="Bathroom Renovation"
          c3="Made this old bathroom look brand new, customers were very happy!"
        />
        <br />
        <br />
        <br />
        <br />
        <Textseg
          style="light"
          title="General Info"
          content="VIP Painting is located in Wayne, New Jersey. 
        This organization primarily operates in the Painting and 
        Paper Hanging business/industry within the Construction-Special 
        Trade Contractors sector. This organization has been operating for 
        approximately 16 years. VIP Painting is estimated to generate 
        $62,000 in annual revenues and employs approximately 1 person 
        at this single location."
        />
        <br />
        <br />
        <br />
        <br />
        <Socials
          facebookLink="https://www.facebook.com/profile.php?id=100011262674529"
          instagramLink="https://www.instagram.com/v.i.p.paintingandremodelingnj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          twitterLink="https://www.twitter.com/example"
        />
      </Router>
    </div>
  );
}

export default App;
