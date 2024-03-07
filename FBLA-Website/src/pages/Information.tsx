import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Textseg from "./components/Textseg";
import React from "react";
import ListGroup from "./components/ListGroup";

const Information: React.FC = () => {
  const [showAlert, setShowAlert] = React.useState<boolean>(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const benefitsItems = [
    "Flexible working hours",
    "Real-world carpentry experience",
    "Competitive compensation",
    "Professional growth opportunities",
    "Hands-on training and mentorship",
    "Positive and inclusive work culture",
  ];

  const handleSelectBenefit = (benefit: string) => {
    console.log(`Selected benefit: ${benefit}`);
  };
  return (
    <div>
      <br></br>
      <br></br>
      <Carousel
        img1="https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/12764643_572344872920036_289428237799375762_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3pO_hCVvnqsAX-Xc8Nw&_nc_oc=AQm3QlO4YnCBXVB97keTQf45m0cTNdZTNdoacpiwy6dfPQC6KcB094Jg9hPgO_3jNKw&_nc_ht=scontent-lga3-1.xx&oh=00_AfC6UYbN3-HngS35Us6hhQQo0susORJ2m13mC-WEt5YhJA&oe=6610EB42"
        img2="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/169458762_1848686985285812_258037922274682803_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vNAIiic5DjQAX-kUrB6&_nc_ht=scontent-lga3-2.xx&oh=00_AfBspzao3tI1dbh8X8IjR5ZKEnsWofz5usYT1UMc_05VIw&oe=6610B6F2"
        img3="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/101515949_1577454115742435_4093345626861862912_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z0Yoms3l_vgAX_f2d2g&_nc_ht=scontent-lga3-2.xx&oh=00_AfCrxtZF0_ENiAEd6lkYmN8BsGS70s2IkK1Yg1dKh-X8oA&oe=6610CC11"
        h1="Welcome to V.I.P. Painting and Remodeling"
        h2="Our Work"
        h3="Our Work"
        c1="Based in Wayne, NJ, we offer high-quality painting and remodeling services."
        c2="Check out some of our recent projects."
        c3="Check out some of our recent projects."
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container my-5">
        <Textseg
          style="light"
          title="About Us"
          content="V.I.P. Painting and Remodeling is a small company based in Wayne, NJ, with a fun and relaxed working environment. We pride ourselves on delivering exceptional results and putting our all into every project. As a team member, you'll have the opportunity to gain valuable real-world carpentry and remodeling experience."
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="mt-5">Benefits of Working with Us</h2>
        <br></br>
        <ListGroup
          items={benefitsItems}
          heading="Employee Benefits"
          onSelectItem={handleSelectBenefit}
        />
        <br></br>
        <hr></hr>
        <br></br>
      </div>
    </div>
  );
};

export default Information;
