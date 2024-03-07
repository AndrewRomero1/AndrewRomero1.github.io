import React, { useState } from "react";

const JobApplication: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add the logic to submit the form data
    console.log("Job Title:", jobTitle);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    // Reset form fields after submission
    setJobTitle("");
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1 className="text-center mb-4">Job Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default JobApplication;
