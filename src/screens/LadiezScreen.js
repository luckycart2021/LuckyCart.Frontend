import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function MenzScreen() {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    return ( 
        <div>  
             
               <div className="wrapper9">
            <a href="./search/category/FITNESS JACKETS">
          <img src="/images/sale7.png" alt="" className="image--cover2"> 
           </img></a>
           <a href="./search/category/WOMEN FITNESS PANTS">
           <img src="/images/sale6.png" alt="" className="image--cover2" >
           </img></a>
         </div>
         <div className="wrapper10">
            <a href="./search/category/FITNESS JACKETS">
          <img src="/images/sale1.png" alt="" className="image--cover7"> 
           </img></a>
           <a href="./search/category/WOMEN FITNESS PANTS">
  
           <img src="/images/sale5.png" alt="" className="image--cover7" >
           </img>
          
 
  </a>
         </div> 
         
            <div>
            <div className="topic2">EXPLORE TOP BRANDS</div>       
               <div className="wrapper2">
            <a href="./search/category/TOPS AND TEES">
          <img src="./images/top.jpg" alt="" className="image--cover0"> 
           </img></a>
           <a href="./search/category/LADIES PANTS">
           <img src="./images/pan.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/HANDBAGS AND CLUTCHES">
           <img src="./images/bag.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/PERFUMES AND SCENTS">
           <img src="./images/per.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/JEWELLERY">
           <img src="./images/ee.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/SAREES">
           <img src="./images/sarees.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/NECKLACE SET">
           <img src="./images/ns.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/BRACELETS">
           <img src="./images/brace.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/KURTIS">
           <img src="./images/bg.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/LINGERIE AND NIGHTWEAR">
           <img src="./images/bra.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/LADIES WATCHES">
           <img src="./images/wt.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/EYEWEAR">
           <img src="./images/eyee.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/MAKEUP">
           <img src="./images/mk.jpg" alt="" className="image--cover0" >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic3">TOP FOOTWEARS FOR YOU</div>       
               <div className="wrapper3">
            <a href="./search/category/FLIP FLOPPERS">
          <img src="./images/fl.jpg" alt="" className="image--cover0"> 
           </img></a>
           <a href="./search/category/LOAFER">
           <img src="./images/ll.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/HEELS">
           <img src="./images/he.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/ANKLE BOOTS">
           <img src="./images/aa.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/GLADIATOR SANDALS">
           <img src="./images/gl.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/BALLERINA FLATS">
           <img src="./images/bb.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/TRAINERS">
           <img src="./images/tt.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/THIGH HIGH BOOTS">
           <img src="./images/th.jpg" alt="" className="image--cover0">
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic4">TRENDING SPORTSWEAR</div>       
               <div className="wrapper4">
            <a href="./search/category/FITNESS JACKETS">
          <img src="./images/jj.jpg" alt="" className="image--cover0"> 
           </img></a>
           <a href="./search/category/WOMEN FITNESS PANTS">
           <img src="./images/jp.jpg" alt="" className="image--cover4" >
           </img></a>
           <a href="./search/category/WOMEN FITNESS DRESS">
           <img src="./images/jt.jpg" alt="" className="image--cover0" >
           </img></a>
           <a href="./search/category/SPORTS SHOES">
           <img src="./images/jjs.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/WORKOUT EQUIPMENTS">
           <img src="./images/we.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/GYM REQUIREMENTS">
           <img src="./images/gr.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/SPORTS REQUIREMENTS">
           <img src="./images/sr.jpg" alt="" className="image--cover0">
           </img></a>
           <a href="./search/category/ALL SPORTS">
           <img src="./images/as.jpg" alt="" className="image--cover0">
           </img></a>
         </div>
         </div>
         </div>      
         );
}


/*------------VIDEO LOADER------------------>
<a href="./search/category/WOMEN FITNESS PANTS">
<video width="320" height="240" controls>
<source src="/images/hh.mp4" alt="" className="image--cover2" >
</source>
</video>
</a>*/