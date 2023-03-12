import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/shop-detail.css";
import { Col, Container, Row, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import CalculateavgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
const ShopDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [productRating, setProductRating] = useState(null);
  const { user } = useContext(AuthContext);

  //this is an static data later we will call our API and load our data from database
  // const tour = tourData.find((tour) => tour.id === id);

  //fetch data from database
  const { data: product, loading, error } = useFetch(`${BASE_URL}/products/${id}`);
  //destructure properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupsize,
  } = product;

  const { totalRating, avgRating } = CalculateavgRating(reviews);

  //format datte
  const options = { day: "numeric", month: "long", year: "numeric" };
  //submit request to the serve
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign In");
      }

      const reviewobj = {
        username: user?.username,
        reviewText,
        rating: productRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewobj),
      });
      const result = await res.json();
      if (!res.ok) {
      return alert(result.message);
    }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
    //later will call our api
    // alert(`${reviewText},${tourRating}`)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading ......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-s-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>

                        {avgRating === 0 ? null : avgRating}

                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i class="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>${price}/per
                        person
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"></i>${distance} k/m
                      </span>
                      <span>
                        <i class="ri-group-line"></i>
                        {maxGroupsize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* --------------tour reviews section----------- */}

                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setProductRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setProductRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setProductRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setProductRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setProductRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.createdAt)
                                  .toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>

                  {/* tour reviews section end*/}
                </div>
              </Col>
              <Col lg="4">
                <Booking product={product} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default ShopDetails;
