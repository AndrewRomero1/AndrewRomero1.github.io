import React from "react";

interface SocialMediaButtonsProps {
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
}

const Socials: React.FC<SocialMediaButtonsProps> = ({
  facebookLink,
  instagramLink,
  twitterLink,
}) => {
  return (
    <div className="social-media-segment row justify-content-center ">
      <div className="col-4 text-center">
        <a
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary shadow-lg"
        >
          Facebook
        </a>
      </div>
      <div className="col-4 text-center">
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger shadow-lg"
        >
          Instagram
        </a>
      </div>
      <div className="col-4 text-center">
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info shadow-lg"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Socials;
