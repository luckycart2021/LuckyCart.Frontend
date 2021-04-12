import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top">
            <div className="col-4">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
           </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                </li>
                <h5>Your product will be delivered in 3 days.</h5>
                  <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Price : Rs.{product.price}</li>


                <div class="row">
  <div class="column">
   
    <a className="button" href="#popup1"> <img src="../images/delivery.jpg" alt="Snow"></img></a>

<div id="popup1" class="overlay">
	<div className="popup">
		<a href="#" className="close" >&times;</a>
		<div className="content">
	Delivery Associate will place the order on your doorstep and step back to maintain a 2-meter distance.

<p>No customer signatures are required at the time of delivery.</p>

<p>For Pay-on-Delivery orders, we recommend paying using Credit card/Debit card/Netbanking . To pay by cash, place cash on top of the delivery box and step back.</p>

	</div>
	</div>

	</div>
  </div>
  <div class="column">
    <a href = "../files/LUCKYCART RETURN POLICIES.pdf">
    <img src="../images/return.jpg" alt="Forest"></img>
    </a>
  </div>
</div>



              </ul>
            </div>
            <div className="col-1">
              <div className="card1 card1-body">
                <ul>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>
                  <li>
                 <div className = "mrp">M.R.P:<del>Rs.{product.price*2.5}</del>  </div>
                 
                    <ul>
                    <ins>Our Price: Rs.{product.price} </ins>
                    </ul>
                    </li>
                      <div className="row">
                      <div>Price</div>
                      <div className="price">Rs.{product.price}</div>
                    </div>
                    <div className="row">
                      <div>You Save:</div>
                      <div className="row-save">
                      <div className="price">Rs.{product.price*2.5- product.price}
                      </div>
                      </div>
                      </div>
                        <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="cart"
                        >
                          Add to Cart
                        </button>
                      </li>
                       <a href= "http://localhost:3000/shipping">
                     <li>     
                      </li>
                      </a>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <img
                className="larger"
                src={product.image1}
                alt={product.name}
              ></img>
               <img
                className="largest"
                src={product.image2}
                alt={product.name}
              ></img>
                <img
                className="large1"
                src={product.image3}
                alt={product.name}
              ></img>
               <div className="desc">
                <ul>
                  Product Description:
                  <p>{product.description}</p>
                </ul>
                </div>
                <table className="table">
          <thead>
            <tr>
              <th>PRODUCT SPECIFICATIONS</th>
              <th>PRODUCT DETAILS</th>
            </tr>
          </thead>
          <tbody>
          <td>{product.specification1}</td>
          <td>{product.detail1}</td>
          <td>{product.detail1}</td>
          <td>{product.specification1}</td>

          </tbody>
          </table>
          <div>
            <h2 id="reviews">Reviews</h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excellent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="review" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (          
                  <button type="button">Please <button type="button">
                     <Link to="/signin">Sign In</Link>
                     </button> to write a review
                    </button>    
                  
                )}
              </li>
            </ul>
          </div>
          </div>
      
      )}
    </div>
  );
}


/*  <img
                className="larger"
                src={product.image1}
                alt={product.name}
              ></img>
               <img
                className="largest"
                src={product.image2}
                alt={product.name}
              ></img>*/