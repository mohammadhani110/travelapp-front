import React from "react";
import imgLarge1 from "../../assets/img/nat-1-large.jpg";
import imgLarge2 from "../../assets/img/nat-2-large.jpg";
import imgLarge3 from "../../assets/img/nat-3-large.jpg";
import img1 from "../../assets/img/nat-1.jpg";
import img2 from "../../assets/img/nat-2.jpg";
import img3 from "../../assets/img/nat-3.jpg";
const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
          <a href="#" className="btn-text">
            Learn more →
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${img1} 300w, ${imgLarge1} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={imgLarge1}
            />
            <img
              srcSet={`${img2} 300w, ${imgLarge2} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={imgLarge2}
            />
            <img
              srcSet={`${img3} 300w, ${imgLarge3} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={imgLarge3}
            />
            {/*
                        <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1">
                        <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2">
                        <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3">
                        */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
