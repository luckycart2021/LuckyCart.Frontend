import React, { useEffect, useState } from 'react';
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import MapScreen from './screens/MapScreen';
import MenzScreen from './screens/MenzScreen';
import LadiezScreen from './screens/LadiezScreen';
import KidzScreen from './screens/KidzScreen';
import MobilesScreen from './screens/MobilesScreen';
import GroScreen from './screens/GroScreen';
import HomeDecorScreen from './screens/HomeDecorScreen';
import TvScreen from './screens/TvScreen';


function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    
    <BrowserRouter>
          <div className="grid-container">
          <header className="row">
          <div>
          </div>
         <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
           <i className="fa fa-bars fa-xs"></i>
            </button>
            <Link className="brand" to="/">
          LUCKYCART
            </Link>              
           <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div className="cart">
          <Link to="/cart">
          <i className="fa fa-shopping-bag fa-10x"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            </div>
            {userInfo ? (
              <div className="dropdown">
                  <i className="fa fa-user fa-10x"></i>
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
              <div className="mp-box mp-box-white notop mp-cat-list-curated js-cat-list-curated">
  <div className="box-row"><ul className="main-cat-list js-main-cat-list cf active">

      <li className=" ">
        <a href="/Menz" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="graphics-design" data-title="Graphics &amp; Design">Menz'  Zone</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/SHIRTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="creative-logo-design" data-title="Logo Design">Shirts</a></li>
              <li><a href="/search/category/T-SHIRTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="sample-business-cards-design" data-title="Business Cards &amp; Stationery">T-Shirts</a></li>
              <li><a href="/search/category/SHORTS FOR MEN" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="create-cartoon-caricatures" data-title="Cartoons &amp; Caricatures">Shorts</a></li>
              <li><a href="/search/category/PANTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="creative-brochure-design" data-title="Flyers &amp; Posters">Pants</a></li>
              <li><a href="/search/category/SHOES AND SOCKS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="ebook-covers" data-title="Book Covers &amp; Packaging">Shoes and Socks</a></li>
              <li><a href="/search/category/BRACELETS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="web-plus-mobile-design" data-title="Web &amp; Mobile Design">Bracelets</a></li>
              <li><a href="/search/category/RINGS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="social-media-design" data-title="Social Media Design">Rings</a></li>
              <li><a href="/search/category/TIES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="banner-ads" data-title="Banner Ads">Ties</a></li>
            
            </ul>
            <ul>
              <li><a href="/search/category/SLIPPERS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="buy-photos-online-photoshopping" data-title="Photoshop Editing">Slippers</a></li>
              <li><a href="/search/category/EYEWEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="3d-2d-models" data-title="3D &amp; 2D Models">Eyewear</a></li>
              <li><a href="/search/category/MEN SELF-CARE PRODUCTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="t-shirts" data-title="T-Shirts">Men Self-Care Products</a></li>
              <li><a href="/search/category/PERFUMES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="presentations-design" data-title="Presentation Design">Perfumes</a></li>
              <li><a href="/search/category/INNERWEARS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="infographics" data-title="Infographics">InnerWears</a></li>
              <li><a href="/search/category/WALLETS AND PURSES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="vector-tracing" data-title="Vector Tracing">Wallets and Purses</a></li>
              <div className="p1">
              <img src="/OFFERS/offer1.png" alt=""></img>
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Ladiez" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="online-marketing" data-title="Digital Marketing">Ladiez Zone</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/JEWELLERY" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="social-marketing" data-title="Social Media Marketing">Jewellery</a></li>
              <li><a href="/search/category/MAKEUP" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="seo-services" data-title="SEO">MakeUp</a></li>
              <li><a href="/search/category/PERFUMES AND SCENTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="website-traffic" data-title="Web Traffic">Perfumes and Scents</a></li>
              <li><a href="/search/category/TOPS AND TEES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="content-marketing" data-title="Content Marketing">Tops and Tees</a></li>
              <li><a href="/search/category/LADIES PANTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="online-video-marketing" data-title="Video Advertising">Ladies Pants</a></li>
              <li><a href="/search/category/WOMEN ETHNIC WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="email-marketing" data-title="Email Marketing">Ethnic Wear</a></li>
              <li><a href="/search/category/LADIES SHOES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="search-engine-marketing" data-title="SEM">Shoes</a></li>
              <li><a href="/search/category/WOMEN WESTERN WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="marketing-strategy" data-title="Marketing Strategy">Western Wear</a></li>
            </ul>
            <ul>
              <li><a href="/search/category/HANDBAGS AND PURSES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="web-analytics-services" data-title="Web Analytics">HnadBags and Purses</a></li>
              <li><a href="/search/category/SUNGLASSES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="influencer-marketing" data-title="Influencer Marketing">SunGlasses</a></li>
              <li><a href="/search/category/FASHION SANDALS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="local-listings" data-title="Local Listings">Fashion Footwear</a></li>
              <li><a href="/search/category/LINGERIE AND NIGHTWEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="domain-research-services" data-title="Domain Research">Lingerie and Nightwear</a></li>
              <li><a href="/search/category/LADIES SPORTWEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="mobile-advertising" data-title="Mobile Advertising">SportsWear</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Kidz" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="writing-translation" data-title="Writing &amp; Translation">Kidz Zone</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/KIDS STATIONARY ITEMS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="resumes-cover-letter-services" data-title="Resumes &amp; Cover Letters">Stationary Items</a></li>
              <li><a href="/search/category/TOYS AND GAMES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="proofreading-editing" data-title="Proofreading &amp; Editing">Toys nad Games</a></li>
              <li><a href="/search/category/GIRLS PANTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="quality-translation-services" data-title="Translation">Girls Pants</a></li>
              <li><a href="/search/category/BOYS PANTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="creative-writing" data-title="Creative Writing">Boys Pants</a></li>
              <li><a href="/search/category/KIDS ESSENTIALS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="business-copywriting" data-title="Business Copywriting">Kids Essentials</a></li>
              <li><a href="/search/category/FASHION BAGS FOR GIRLS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Fashion Bags for Girls</a></li>
              <li><a href="/search/category/FASHION BAGS FOR BOYS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Fashion Bags for Boys</a></li>
              <li><a href="/search/category/GIFTS FOR KIDS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="research-summaries" data-title="Research &amp; Summaries">Gifts for Kids</a></li>
              <li><a href="/search/category/GIRLS FOOTWEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Footwear for Girls</a></li>
            
            </ul>
            <ul>
              <li><a href="/search/category/GIRLS ETHNIC WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="articles-blogposts" data-title="Articles &amp; Blog Posts">Girls Ethnic Wear</a></li>
              <li><a href="/search/category/BOYS ETHNIC WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-press-releases" data-title="Press Releases">Boys Ethnic Wear</a></li>
              <li><a href="/search/category/GIRLS WESTERN WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="transcription" data-title="Transcription">Girls Western Wear</a></li>
              <li><a href="/search/category/BOYS WESTERN WEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="legal-writing" data-title="Legal Writing">Boys Western Wear</a></li>
              <li><a href="/search/category/KIDS WATCHES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Watches for Kids</a></li>
              <li><a href="/search/category/KIDS JEWELLERY" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Jewellery for Kids</a></li>
              <li><a href="/search/category/GIRLS SHOES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Shoes for Girls</a></li>
              <li><a href="/search/category/BOYS SHOES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Shoes for Boys</a></li>
              <li><a href="/search/category/BOYS FOOTWEAR" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="writing-services" data-title="Other">Footwear for Boys</a></li>

            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Home" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="video-animation" data-title="Video &amp; Animation">Home Decor</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/WALL PRINTS AND PAINTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="whiteboard-explainer-videos" data-title="Whiteboard &amp; Explainer Videos">Wall Paints and Prints </a></li>
              <li><a href="/search/category/CARPETS AND BEDROOM DECORS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="custom-video-intros" data-title="Intros &amp; Animated Logos">Carpets nad Bedroom Decors</a></li>
              <li><a href="/search/category/WALL HANGINGS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="promotional-brand-videos" data-title="Promotional &amp; Brand Videos">Wall Hangings</a></li>
              <li><a href="/search/category/DECORATIVE ITEMS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-post-production-editing" data-title="Editing &amp; Post Production">Cute Decorative Items</a></li>
              <li><a href="/search/category/KITCHEN DECORS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Kitchen Decors</a></li>
              <li><a href="/search/category/BATHROOM DECORS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Bathroom Decors</a></li>
              <li><a href="/search/category/DECORATIVE FURNITURES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="lyric-music-videos" data-title="Lyric &amp; Music Videos">Decorative Items</a></li>
            </ul>
            <ul>
              <li><a href="/search/category/CLOCKS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="buy-video-testimonials" data-title="Spokespersons &amp; Testimonials">clocks</a></li>
              <li><a href="/search/category/ARTIFACTS AND CERAMICS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="animated-characters-modeling" data-title="Animated Characters &amp; Modeling">Artifacts and Ceramics</a></li>
              <li><a href="/search/category/HANDICRAFTS ADN HANDLOOMS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-greetings" data-title="Video Greetings">Video Greetings</a></li>
              <li><a href="/search/category/PLANT POTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Plant Pots</a></li>
              <li><a href="/search/category/BOOKENDS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Bookends</a></li>
              <li><a href="/search/category/PLANT POTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Plant Pots</a></li>
              <li><a href="/search/category/DINING DECORS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="video-services" data-title="Other">Dining Decors</a></li>
             
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Tv" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="music-audio" data-title="Music &amp; Audio">Tv, Appliances,etc</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/TELEVISION" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="voice-overs" data-title="Voice Over">Televisions</a></li>
              <li><a href="/search/category/HOME ENTERTAINMENT SYSTEMS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="mixing-mastering" data-title="Mixing &amp; Mastering">Home Entertainment Systems</a></li>
              <li><a href="/search/category/AC" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="producers-composers" data-title="Producers &amp; Composers">Air Conditioners</a></li>
              <li><a href="/search/category/MIXER GRINDERS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="singers-songwriters" data-title="Singers &amp; Songwriters">Mixer Grinders</a></li>
              <li><a href="/search/category/REFRIGERATORS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="session-musicians" data-title="Session Musicians">Refrigerators</a></li>
            </ul>
            <ul>
              <li><a href="/search/category/WASHING MACHINES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="jingles-drops" data-title="Jingles &amp; Drops">Washing Machines</a></li>
              <li><a href="/search/category/CAMERAS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="sound-effects" data-title="Sound Effects">Cameras</a></li>
              <li><a href="/search/category/CAMERA ACCESSORIES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="sound-effects" data-title="Sound Effects">Camera Accessories</a></li>
              <li><a href="/search/category/HEATING AND COOLING APPLIANCES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="sound-effects" data-title="Sound Effects">Heating and Cooling Appliances</a></li>
              <li><a href="/search/category/HEADPHONES AND BLUETOOTHS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="music-audio-services" data-title="Other">Headphones and Bluetooths</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Mobiles" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="programming-tech" data-title="Programming &amp; Tech">Mobiles & Laptops</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/MOBILES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="wordpress-services" data-title="WordPress">Mobiles</a></li>
              <li><a href="/search/category/MOBILE ACCESSORIES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="web-cms-services" data-title="Website Builders &amp; CMS">Mobiles Accessories</a></li>
              <li><a href="/search/category/TABLETS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="web-programming-services" data-title="Web Programming">Tablets</a></li>
              <li><a href="/search/category/LAPTOPS AND COMPUTERS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="ecommerce-services" data-title="Ecommerce">Laptops & Computers</a></li>
              <li><a href="/search/category/LAPTOP AND COMPUTER ACCESSORIES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="mobile-app-services" data-title="Mobile Apps &amp; Web">Laptop & Computer Accessories</a></li>
              <li><a href="/search/category/STORAGE DEVICES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="desktop-app-services" data-title="Desktop applications">Storage Devices</a></li>
            </ul>
        </div>
      </div>
      </li>
      <li className="">
        <a href="/Groceries" data-gtm-action="homepage-dropdown-click" data-gtm-event="Category Navigation" data-gtm-label="advertising" data-title="Advertising">Groceries</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/DIET FOODS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="music-promotions" data-title="Music Promotion">Diet Foods</a></li>
              <li><a href="/search/category/HOUSEHOLD SUPPLIES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="radio-commercials" data-title="Radio">Household Supplies</a></li>
              <li><a href="/search/category/SNACKS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="banner-advertising" data-title="Banner Advertising">Banner Advertising</a></li>
              <li><a href="/search/category/GOURMET FOODS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="out-of-home-advertising" data-title="Outdoor Advertising">Outdoor Advertising</a></li>
              <li><a href="/search/category/BEVERAGES AND MIXES" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="handing-out-flyers" data-title="Flyers &amp; Handouts">Flyers &amp; Handouts</a></li>
            </ul>
            <ul>
              <li><a href="/search/category/BABY FOOD PRODUCTS" data-gtm-action="" data-gtm-event="Category Navigation" data-gtm-label="holding-a-sign" data-title="Hold Your Sign">Baby Food Products</a></li>
            </ul>
          </div>
        </div>
      </li>
   
          </ul>
        </div>
      </div>
      
      </header> 

<a href="https://api.whatsapp.com/send?phone=+919962314578" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>
       
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        
        <main>
          <Route path="/Groceries" component={GroScreen}></Route>
          <Route path="/Mobiles" component={MobilesScreen}></Route>
          <Route path="/Tv" component={TvScreen}></Route>
          <Route path="/Home" component={HomeDecorScreen}></Route>
          <Route path="/Kidz" component={KidzScreen}></Route>
          <Route path="/Ladiez" component={LadiezScreen}></Route>
          <Route path="/Menz" component={MenzScreen}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit"component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" component={SearchScreen} exact></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
       



        </div>
      
        
    </BrowserRouter>
  );
}

export default App;
/*  <footer className="footer">
          <h10>WHY SHOP WITH US?</h10>
         <p><h11>Wanna shop Products with High Quality, Low price and quick Delivery? We, the team of LUCKYCART are dedicated in providing World-Class Best Quality Services to our Customers. We deeply concern every feedback and work accordingly that would make our dear Customers satisfied and happy. In order to maintain your privacy, we have enabled highest level of security and thus FEEL FREE! Our Costumer support is always under your service and are awaiting to help you out. We also provide door-delivery service ANY WHERE, ANY PLACE, ANY CONDITON. World-class payment options are available so you can feel free to choose your beloved products. Our Easy Return Policies and Exchange Offers are one of the best experiences you could receive from us. Any product purchased will we delivered within 5 Business Days. Our User-Friendly Website can be accessed from ANY PLACE, by ANY AGE and at ANY TIME. We are indeed responsible for providing Maximum Offers that are never found anywhere else.

HAPPY SHOPPING!!
</h11></p>
        </footer>*/
/*<div className="pic">
    <div className="exchange">
      <a href="./images/Learn How to Sell and Earn with LUCKYCART.pdf">
            EXCHANGE OFFERS
          </a>
          </div>
          <div className="sell">
          <a href="./images/EXCHANGE OFFERS.pdf">
            SELL ON LUCKYCART
          </a>
          </div>
          </div>*/


/*<div className='dropdown'> 
  <a href='/Menz'>Menz Zone</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/SHIRTS">SHIRTS</a></li>
         <li><a href="/search/category/T-SHIRTS">T-SHIRTS</a></li>
         <li><a href="/search/category/PANTS">PANTS</a></li>
         <li><a href="/search/category/SHOES AND SOCKS">SHOES AND SOCKS</a></li>
         <li><a href="/search/category/BRACELETS">BRACELETS</a></li>
         <li><a href="/search/category/RINGS">RINGS</a></li>
         <li><a href="/search/category/TIES">TIES</a></li>
         <li><a href="/search/category/SLIPPERS">SLIPPERS</a></li>
         <li><a href="/search/category/EYEWEAR">EYEWEAR</a></li>
         <li><a href="/search/category/MEN SELF-CARE PRODUCTS">MEN SELF-CARE PRODUCTS</a></li>
         <li><a href="/search/category/PERFUMES">PERFUMES</a></li>
         <li><a href="/search/category/INNERWEARS">INNERWEARS</a></li>
         <li><a href="/search/category/WALLETS AND PURSES">WALLETS AND PURSES</a></li>
         <li><a href="/search/category/WATCHES FOR MEN">WATCHES FOR MEN</a></li>
         <li><a href="/search/category/SHORTS FOR MEN">SHORTS FOR MEN</a></li>
     </ul>
</div>
<div className='dropdown'> 
  <a href='/Ladiez'>Ladiez Zone</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/JEWELLERY">JEWELLERY</a></li>
         <li><a href="/search/category/MAKEUP">MAKEUP</a></li>
         <li><a href="/search/category/PERFUMES ADNS SCENTS">PERFUMES AND SCENTS</a></li>
         <li><a href="/search/category/TOPS AND TEES">TOPS AND TEES</a></li>
         <li><a href="/search/category/LADIES PANTS">LADIES PANTS</a></li>
         <li><a href="/search/category/WOMEN ETHNIC WEAR">WOMEN ETHNIC WEAR</a></li>
         <li><a href="/search/category/LADIES SHOES">LADIES SHOES</a></li>
         <li><a href="/search/category/WOMEN WESTERN WEAR">WOMEN WESTERN WEAR</a></li>
         <li><a href="/search/category/HANDBAGS AND PURSES">HANDBAGS AND CLUTCHES</a></li>
         <li><a href="/search/category/SUNGLASSES">SUNGLASSES</a></li>
         <li><a href="/search/category/FASHION SANDALS">FASHION fOOTWEAR</a></li>
         <li><a href="/search/category/LADIES WATCHES">LADIES WATCHES</a></li>
         <li><a href="/search/category/LINGERIE AND NIGHTWEAR">LINGERIE AND NIGHTWEAR</a></li>
         <li><a href="/search/category/LADIES SPORTWEAR">LADIES SPORTSWEAR</a></li>

</ul>
</div>

<div className='dropdown'> 
  <a href='/Kidz'>Kidz Zone</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/KIDS STATIONARY ITEMS">STATIONERY ITEMS</a></li>
         <li><a href="/search/category/TOYS AND GAMES">TOYS AND GAMES</a></li>
         <li><a href="/search/category/PANTS">PANTS</a></li>
         <li><a href="/search/category/KIDS ESSENTIALS">KIDS ESSENTIALS</a></li>
         <li><a href="/search/category/GIFTS FOR KIDS">GIFTS FOR KIDS</a></li>
         <li><a href="/search/category/GIRLS ETHNIC WEAR">GIRLS ETHNIC WEAR</a></li>
         <li><a href="/search/category/BOYS ETHNIC WEAR">BOYS ETHNIC WEAR</a></li>
         <li><a href="/search/category/BOYS ETHNIC WEAR">GIRLS WESTERN WEAR</a></li>
         <li><a href="/search/category/BOYS ETHNIC WEAR">BOYS WESTERN WEAR</a></li>
         <li><a href="/search/category/KIDS JEWELLERY">KIDS JEWELLERY</a></li>
         <li><a href="/search/category/KIDS' WATCHES">KIDS' WATCHES</a></li>
         <li><a href="/search/category/KIDS' SHOES">KIDS' SHOES</a></li>
         <li><a href="/search/category/KIDS' SLIPPERS">KIDS' SLIPPERS</a></li>
         <li><a href="/search/category/GIRLS' SANDALS">GIRLS' SANDALS</a></li>
         <li><a href="/search/category/BAGS"> BAGS</a></li>
         <li><a href="/search/category/KIDS' FASHION EYEWEAR">KIDS' FASHION EYEWEAR</a></li>

</ul>
</div>

<div className='dropdown'> 
  <a href='/Home'>Home Decor</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/WALL PRINTS AND PAINTS">WALL PRINTS AND PAINTS</a></li>
         <li><a href="/search/category/CARPETS AND BEDROOM DECORS">BEDROOM DECORS</a></li>
         <li><a href="/search/category/TOYS AND GAMES">TOYS AND GAMES</a></li>
         <li><a href="/search/category/WALL HANGINGS">WALL HANGINGS</a></li>
         <li><a href="/search/category/DECORATIVE TINY ITEMS">DECORATIVE TINY ITEMS</a></li>
         <li><a href="/search/category/DECORATIVE FURNITURES">DECORATIVE FURNITURES</a></li>
         <li><a href="/search/category/PLANT POTS">PLANT POTS</a></li>
         <li><a href="/search/category/HANDICRAFTS AND HANDLOOM">HANDICRAFTS AND HANDLOOM</a></li>
         <li><a href="/search/category/ARTIFACTS AND CERAMICS">ARTIFACTS AND CERAMICS</a></li>
         <li><a href="/search/category/CLOCKS">CLOCKS</a></li>
         <li><a href="/search/category/BOOKENDS">BOOKENDS</a></li>
         <li><a href="/search/category/OIL BURNERS">OIL BURNERS</a></li>
         <li><a href="/search/category/KITCHEN DECORS">KITCHEN DECORS</a></li>
         <li><a href="/search/category/BATHROOM DECORS">BATHROOM DECORS</a></li>
         <li><a href="/search/category/DINING DECORS">DINING DECORS</a></li>
         <li><a href="/search/category/WALL SHELVES">WALL SHELVES</a></li>

</ul>
</div>

<div className='dropdown'> 
  <a href='/Tv'>Tv, Home Appliancs</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/TELEVISION">TELEVISION</a></li>
         <li><a href="/search/category/CARPETS AND BEDROOM DECORS">BEDROOM DECORS</a></li>
         <li><a href="/search/category/HOME ENTERTAINMENT SYSTEMS">HOME ENTERTAINMENT SYSTEMS</a></li>
         <li><a href="/search/category/AC">AC</a></li>
         <li><a href="/search/category/MIXER GRINDERS">MIXER GRINDERS</a></li>
         <li><a href="/search/category/REFRIGERATORS">REFRIGERATORRS</a></li>
         <li><a href="/search/category/WASHING MACHINES">WASHING MACHINES</a></li>
         <li><a href="/search/category/CAMERAS">CAMERAS</a></li>
         <li><a href="/search/category/HEADPHONES AND BLUETOOTHS">HEADPHONES AND BLUETOOTHS</a></li>
         <li><a href="/search/category/CAMERA ACCESSORIES">CAMERA ACCESSORIES</a></li>
         <li><a href="/search/category/HEATING AND COOLING APPLIANCES">HEATING AND COOLING APPLIANCES</a></li>

</ul>
</div>

<div className='dropdown'> 
  <a href='/Mobiles'>Mobiles & Laptops </a>
  <ul className="dropdown-content">

         <li><a href="/search/category/MOBILES">MOBILES</a></li>
         <li><a href="/search/category/MOBILE ACCESSORIES">MOBILE ACCESSORIES</a></li>
         <li><a href="/search/category/TABLETS">TABLETS</a></li>
         <li><a href="/search/category/LAPTOPS">LAPTOPS</a></li>
         <li><a href="/search/category/COMPUTERS">COMPUTERS</a></li>
         <li><a href="/search/category/COMPUTER EXTRAS">COMPUTER EXTRAS</a></li>
         <li><a href="/search/category/LAPTOP ACCESSORIES">LAPTOP ACCESSORIES</a></li>
         <li><a href="/search/category/STORAGE DEVICES">STORAGE DEVICES</a></li>

</ul>
</div>

<div className='dropdown'> 
  <a href='/Groceries'>Groceries</a>
  <ul className="dropdown-content">
         <li><a href="/search/category/DIET FOODS">DIET FOODS</a></li>
         <li><a href="/search/category/HOUSEHOLD SUPPLIES">HOUSEHOLD SUPPLIES</a></li>
         <li><a href="/search/category/SNACKS">SNACKS</a></li>
         <ul>
         <li><a href="/search/category/GOURMET FOODS">GOURMET FOODS</a></li>
         <li><a href="/search/category/BEVERAGES AND MIXES">BEVERAGES AND MIXES</a></li>
         <li><a href="/search/category/COMPUTER EXTRAS">COMPUTER EXTRAS</a></li>
         <li><a href="/search/category/LAPTOP ACCESSORIES">LAPTOP ACCESSORIES</a></li>
         <li><a href="/search/category/STORAGE DEVICES">STORAGE DEVICES</a></li>
         </ul>
</ul>
</div>
</div>*/