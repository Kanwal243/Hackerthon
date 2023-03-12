import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import Newsletter from "./../shared/Newsletter"
import ProductCard from "../shared/ProductCard";

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log("data",data);

  return (
    <>
      <CommonSection title={"Product search result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Product Found</h4>
              )  : (
              data?.map(product => (
                <Col lg="3" className="mb-4" key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default SearchResultList;
