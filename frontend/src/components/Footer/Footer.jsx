import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";
import './footer.css'
const Quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Quick__link2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "LogIn",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur amet commodi esse odio consequuntur sequi, ullam
                aperiam, maiores reiciendis odit repellendus excepturi eligendi
                asperiores impedit doloremque illum similique, quod at!
              </p>
            </div>
            <div className="social__links  d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-facebook-circle-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {Quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {Quick__link2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
        
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">
                 Malir Kalaboard
                  </p>
                </ListGroupItem>


                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class='ri-mail-line'></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">Abc@mailinator.com</p>
                </ListGroupItem>


                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i class='ri-phone-fill'></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">+9233333333333
</p>                </ListGroupItem>
          
            </ListGroup>
          </Col>
          <Col lg = '12'className="text-center pt-5">
            <p className="copyright">Copyright {year} , design and develop by Kanwal Yousuf. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
