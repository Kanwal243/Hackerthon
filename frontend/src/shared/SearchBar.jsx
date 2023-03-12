import React, { useRef } from "react";
import "./search-bar.css";
import { FormGroup, Form, Col } from "reactstrap";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const productRef = useRef("");
  const priceRef = useRef(0);
  const QuantityRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async() => {
    const product = productRef.current.value;
    const price = priceRef.current.value;
    const Quantity = QuantityRef.current.value;
    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }

    const res =
      await fetch(`${BASE_URL}/products/search/getProductBySearch?product=${product}&price=${price}&quantity=${Quantity}`);

    if (!res.ok) alert("Something Went Wrong")

    const result = await res.json();
    navigate(`/products/search?product=${product}&price=${price}&quantity=${Quantity}`,{ state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
            <i class="ri-product-hunt-fill"></i>
            </span>
            <div>
              <h6>Product</h6>
              <input
                type="text"
                placeholder="What are you wondering?"
                ref={productRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
            <i class="ri-price-tag-3-line"></i>
            </span>
            <div>
              <h6>Price</h6>
              <input
                type="number"
                placeholder="Currency in Rupees"
                ref={priceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Quantity</h6>
              <input type="number" placeholder="0" ref={QuantityRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
