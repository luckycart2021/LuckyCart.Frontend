import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function HomeDecorScreen() {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    return ( 
        <div>      
             <div className="hm">
            <img src="./images/bd.jpg" alt=""/>
             </div>
            <div>
            <div className="topic1">EXPLORE TOP BRANDS</div>       
               <div className="wrapper1">
            <a href="./search/category/PANTS">
          <img src="https://i.pinimg.com/564x/0d/52/61/0d5261a62b62d2f0f30233d0c28f1f95.jpg" alt="" className="image--cover"> 
           </img></a>Bed Covers
           <a href="./search/category/SHORTS FOR MEN">
           <img src="./images/s.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/SHIRTS">
           <img src="./images/shirt.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/T-SHIRTS">
           <img src="./images/tshi.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/PERFUMES">
           <img src="./images/pe.jpg" alt="" className="image--cover">
           </img></a>
         </div>
         </div>
         <div className="hm1">
            <img src="./images/hm.jpg" alt=""/>
             </div>
         </div>

         );
}
