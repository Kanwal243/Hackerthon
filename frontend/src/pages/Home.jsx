import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/botanical-product-backdrop-with-tropical-leaves.jpg";
import heroImg02 from "../assets/images/shopping-cart-trolley-basket-supermarket-icon-sign-symbol-white-background-3d-rendering.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.jpg";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Shop"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Shop opens the door at {""}
                  <span className="highlight">Saylani Welfare</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam nam sint vitae et amet quisquam minima, reiciendis
                  minus culpa, in sapiente at necessitatibus doloribus non,
                  earum dolor! Error, praesentium delectus.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*       hero section start here*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We Offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*       feacture tou section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Products</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*       feacture tou section end */}
      {/*       experienced section start*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experince_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  mollitia, harum optio quos rem quam similique ad hic facere
                  neque sint fugit expedita distinctio et nostrum, ullam, ex
                  tenetur suscipit.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Highly Sale</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Products</h6>
                </div>
                <div className="counter__box">
                  <span>150</span>
                  <h6>Years experience </h6>
                </div>
              </div>
            </Col>
            <Col>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*       experienced section end*/}
      {/*       gallery section start*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers product gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*       gallery section end*/}
      {/*       testimonial section start*/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What are fans says about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/*       testimonial section end*/}
      <Newsletter/>
    </>
  );
};

export default Home;
