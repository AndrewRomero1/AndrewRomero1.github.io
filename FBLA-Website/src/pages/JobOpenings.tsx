import React from "react";
import { Link } from "react-router-dom";

const JobOpenings: React.FC = () => {
  const jobOpenings = [
    {
      title: "Painter",
      description:
        "We are seeking skilled painters to join our team. Responsibilities include preparing surfaces, applying paint, and ensuring a clean and professional finish. Experience with interior and exterior painting is required.",
      payRate: "$20/hour",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/001/236/434/small/male-painter-holding-paint-roller.jpg",
    },
    {
      title: "Carpenter",
      description:
        "We are looking for experienced carpenters to join our remodeling team. Responsibilities include framing, drywall installation, trim work, and other carpentry tasks. Must have a strong attention to detail and a commitment to quality workmanship.",
      payRate: "$25/hour",
      image:
        "https://waldroncarpentry.com/wp-content/uploads/2023/05/pexels-mikael-blomkvist-8961401-300x200.jpg",
    },
    {
      title: "Laborer",
      description:
        "We are seeking hardworking individuals to assist our crew with various tasks on job sites. Responsibilities include material handling, site preparation, and cleanup. No experience required, but a willingness to learn and work hard is essential.",
      payRate: "$15/hour",
      image:
        "https://img.freepik.com/free-photo/construction-worker-is-carrying-wood-planks-very-hard-construction-site_1150-21888.jpg?q=10&h=200",
    },
  ];

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1 className="text-center mb-4">Job Openings</h1>
      <div className="row">
        {jobOpenings.map((job, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={job.image} className="card-img-top" alt={job.title} />
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text">Pay Rate: {job.payRate}</p>
                <Link to="/job-application" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default JobOpenings;
