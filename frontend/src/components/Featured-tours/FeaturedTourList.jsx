import React from "react";
import ProductCard from "../../shared/ProductCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedProductList = () => {
  const {
    data: featuredproducts,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products/search/getFeaturedProducts`);

  //console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading ......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredproducts?.map((product) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedProductList;
