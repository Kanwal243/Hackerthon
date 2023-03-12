import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/shop.css";
// import tourData from "../assets/data/tours";
import ProductCard from "../shared/ProductCard";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import Newsletter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Shops = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: products, loading, error } = useFetch(`${BASE_URL}/products?page=${page}`);
  const { data: productCount } = useFetch(`${BASE_URL}/products/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(productCount / 8); //later we will use backend datacount
    setPageCount(pages);
    window.scrollTo(0,0)
  }, [page, productCount,products]);

  return (
    <>
      <CommonSection title={"All Category Products "} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4>Loading ......</h4>}
          {error && <h4>{error}</h4>}
          {!loading && !error && (
            <Row>
              {products?.map((product) => (
                <Col lg="3" className="mb-4" key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Shops;
