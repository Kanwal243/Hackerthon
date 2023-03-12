import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Qaulity Product",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam fugit voluptas debitis cumque aliquid magni sapiente sit voluptatum blanditiis. Repellat quasi repellendus sequi corporis vel voluptas officia dolorem molestiae!",
  },
  {
    imgUrl: guideImg,
    title: "Best Shopping Guide",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam fugit voluptas debitis cumque aliquid magni sapiente sit voluptatum blanditiis. Repellat quasi repellendus sequi corporis vel voluptas officia dolorem molestiae!",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam fugit voluptas debitis cumque aliquid magni sapiente sit voluptatum blanditiis. Repellat quasi repellendus sequi corporis vel voluptas officia dolorem molestiae!",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
