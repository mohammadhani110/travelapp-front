import React from 'react'
import {BsCompass, BsHeart, BsMap} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
const Features = () => {
    return (
        <section className="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/* <i className="feature-box__icon icon-basic-world" /> */}
                        <BiWorld className="feature-box__icon" color={"green"} size={"4rem"}/>
                        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/* <i className="feature-box__icon icon-basic-compass" /> */}
                        <BsCompass className="feature-box__icon" color={"green"} size={"4rem"}/>
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/* <i className="feature-box__icon icon-basic-map" /> */}
                        <BsMap className="feature-box__icon" color={"green"} size={"4rem"}/>
                        <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/* <i className="feature-box__icon icon-basic-heart" /> */}
                        <BsHeart className="feature-box__icon" color={"green"} size={"4rem"}/>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features