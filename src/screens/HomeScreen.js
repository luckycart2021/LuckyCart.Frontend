import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return ( 
     <div>
       <div className="dis">
         <img src="./images/shoe.jpg" alt=""></img>
       </div>

       <div className="topic9">THIS WEEK'S TRENDING PRODUCTS</div>       
       <div className="wrapper11">
            <a href="./search/category/FITNESS JACKETS">
          <img src="/images/sale8.JPG" alt="" className="image--cover2"> 
           </img></a>
           <a href="./search/category/WOMEN FITNESS PANTS">
           <img src="/images/sale5.png" alt="" className="image--cover2" >
           </img></a>
         </div>
         <div className="wrapper12">
            <a href="./search/category/FITNESS JACKETS">
          <img src="/images/sale11.jpg" alt="" className="image--cover7"> 
           </img></a>
           <a href="./search/category/WOMEN FITNESS PANTS">
  
           <img src="/images/sale9.jpg" alt="" className="image--cover7" >
           </img>
          
 
  </a>
         </div> 
         
         
      <h17>Featured Products</h17>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
      <footer class="new_footer_area bg_color">
<h10>WHY SHOP WITH US?</h10>
         <p><h11>Wanna shop Products with High Quality, Low price and quick Delivery? We, the team of LUCKYCART are dedicated in providing World-Class Best Quality Services to our Customers. We deeply concern every feedback and work accordingly that would make our dear Customers satisfied and happy. In order to maintain your privacy, we have enabled highest level of security and thus FEEL FREE! Our Costumer support is always under your service and are awaiting to help you out. We also provide door-delivery service ANY WHERE, ANY PLACE, ANY CONDITON. World-class payment options are available so you can feel free to choose your beloved products. Our Easy Return Policies and Exchange Offers are one of the best experiences you could receive from us. Any product purchased will we delivered within 5 Business Days. Our User-Friendly Website can be accessed from ANY PLACE, by ANY AGE and at ANY TIME. We are indeed responsible for providing Maximum Offers that are never found anywhere else.</h11></p>


            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                      
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft">
                                <h13 className="f-title f_600 t_color f_size_18">TAKE A LOOK AT THIS</h13>
                                <ul className="list-unstyled f_list">
                                    <li><a href="./files/LUCKYCART RETURN POLICIES.pdf">RETRUN POLICIES</a></li>
                                    <li><a href="./images/EXCHANGE OFFERS.pdf">EXCANGE OFFERS</a></li>
                                    <li><a href="./images/Learn How to Sell and Earn with LUCKYCART.pdf">SELL ON LUCKYCART</a></li>
                                    <li><a href="./files/LUCKYCART RETURN POLICIES.pdf">RETURN POLICIES</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft">
                                <h13 className="f-title f_600 t_color f_size_18">Reach Us at</h13>
                                <div className="f_social_icon">
                                    <a href="https://m.facebook.com/home.php?ref=wizard&_rdr" className="fa fa-facebook"></a>
                                    <a href="https://twitter.com/LUCKYCART1" className="fa fa-twitter"></a>
                                    <a href="https://www.linkedin.com/in/lucky-cart-9264a820b/" className="fa fa-linkedin"></a>
                                    <a href="https://www.instagram.com/luckycart2021/" className="fa fa-instagram"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">All rights reserved.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
      </footer>
    </div>
    
         );
}


/*<div className="topic">Things you might want to discover</div>
   <div className="wrapper">
     <a href="./search/category/MIXER GRINDERS">
 <img src="./images/blender.jpg" className="image--cover"> 
  </img></a>
  <a href="./search/category/MAKEUP">
  <img src="./images/eye.jpg" alt="" className="image--cover" >
  </img></a>
  <a href="./search/category/MOBILE ACCESSORIES">
  <img src="./images/phone.jpg" alt="" className="image--cover" >
  </img></a>
  <a href="./search/category/JEWELLERY">
  <img src="./images/ear.jpg" alt="" className="image--cover">
  </img></a>
</div>*/