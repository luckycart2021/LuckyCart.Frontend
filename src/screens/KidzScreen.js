import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function KidzScreen() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    return ( 
        <div>      
    <div className="sale3">
       <img src="./images/sale3.jpg" alt=""></img>
    </div>
   
            <div>
           <div className="topic5">GIRLS TRENDS </div>       
               <div className="wrapper5">
               <a href="./search/category/GIRLS WESTERN WEAR">
           <img src="./images/girl.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/GIRLS ETHNIC WEAR">
           <img src="./images/ge.jpg" alt="" className="image--cover3" >
           </img></a>
           <a href="./search/category/GIRLS SHORTS">
           <img src="./images/gs.jpg" alt="" className="image--cover1">
           </img></a>
           <a href="./search/category/GIRLS DUNGAREES AND JUMPSUITS">
           <img src="./images/dg.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/GIRLS TIGHTS AND LEGGINGS">
           <img src="./images/jjj.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/GIRLS JEANS">
           <img src="./images/jc.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/GIRLS SWEATERS AND JACKETS">
           <img src="./images/swe.jpg" alt="" className="image--cover1" >
           </img></a>
           <a href="./search/category/INNERWEAR AND NIGHTWEAR">
           <img src="./images/inw.jpg" alt="" className="image--cover1" >
           </img></a>
         </div>
         </div>
         <div>
         <div className="topic6">BOYZ TRENDS</div>       
               <div className="wrapper6">
               <a href="./search/category/BOYS ETHNIC WEAR">
           <img src="./images/BE.jpg" alt="" className="image--cover3">
           </img></a>
           <a href="./search/category/BOYS SHIRTS">
           <img src="./images/boyshirt.jpg" alt="" className="image--cover1">
           </img></a>
           <a href="./search/category/BOYS T-SHIRTS">
           <img src="./images/tshib.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BOYS JEANS">
           <img src="./images/jean.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BOYS TROUSERS AND SHORTS">
           <img src="./images/trs.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BOYS SWEATERS AND JACKETS">
           <img src="./images/jack.jpg" alt="" className="image--cover1" >
           </img></a>
           <a href="./search/category/BOYS INNERWEAR AND SLEEPWEAR">
           <img src="./images/py.jpg" alt="" className="image--cover1" >
           </img></a>
           <a href="./search/category/BOYS CASUAL DRESS SET">
           <img src="./images/off.jpg" alt="" className="image--cover1" >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic7">TRENDY CUTE FOOTWEARS FOR KIDS</div>       
               <div className="wrapper7">
            <a href="./search/category/GIRLS SANDALS">
          <img src="./images/san.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/BOYS SHOES">
           <img src="./images/sho.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/GIRLS FLIP-FLOPS">
           <img src="./images/flfl.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BOYS SANDALS">
           <img src="./images/sandb.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/GIRLS BOOTIES">
           <img src="./images/boot.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BOYS BOOTIES">
           <img src="./images/boysbooties.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/GIRLS BALLERINAS">
           <img src="./images/bsh.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/KIDS CASUAL FOOTWEAR">
           <img src="./images/casual.jpg" alt="" className="image--cover">
           </img></a> 
         </div>
         </div>
         <div>
            <div className="topic8">BATHROOM ESSENTIALS</div>       
               <div className="wrapper8">
            <a href="./search/category/AVENGERS TOWEL">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71lUZz%2BMwSL._SY450_.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/DISNEY TOWEL">
           <img src="https://5.imimg.com/data5/HH/GX/FX/SELLER-5476576/disney-princess-kids-bath-towel-60x120-500x500.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/KIDS BATHROBE">
           <img src="https://ae01.alicdn.com/kf/H0cf09508ca4342efb8605ebe921a7f18e/Winter-Kids-Bathrobe-Cartoon-Baby-Bath-Robe-Panda-Unicorn-Animal-Hooded-Towel-Bathrobes-For-Children-Pajamas.jpg_Q90.jpg_.webp" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/KIDS SOAPS">
           <img src="https://qph.fs.quoracdn.net/main-qimg-59260e32a7caf8f4e060e9e20c30e6e7" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/KIDS TOOTHBRUSHES">
           <img src="https://ae01.alicdn.com/kf/HTB1bzDxXsfrK1RkSnb4q6xHRFXa9.jpg" alt="" className="image--cover1">
           </img></a>
           <a href="./search/category/BATHROOM TOYS">
           <img src="https://ae01.alicdn.com/kf/HTB1ffjtMpXXXXc9XXXXq6xXFXXXx/Kids-Bath-Toys-Organizer-Storage-Bag-With-Suction-Cup-Bathroom-Waterproof-Bathing-Toys-for-Children-Collection.jpg_Q90.jpg_.webp" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/KIDS BATHTUB">
           <img src="https://images-na.ssl-images-amazon.com/images/I/61FCVxxihSL._SL1100_.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/BATH BRUSHES">
           <img src="https://images-na.ssl-images-amazon.com/images/I/51UqNXfvXSL.jpg" alt="" className="image--cover">
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic8">STATIONERY ITEMS</div>       
               <div className="wrapper8">
            <a href="./search/category/PENS AND PENCILS">
          <img src="./images/pen.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/HIGHLIGHTER, ERASERS, OTHERS">
           <img src="./images/shar.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BAGS AND SUPPLIES">
           <img src="./images/bagg.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/NOTEBOOKS">
           <img src="./images/note.jpg" alt="" className="image--cover">
           </img></a>
         </div>
         <div>
            <div className="topic8">TOYS FOR AGE 0-5</div>       
               <div className="wrapper8">
            <a href="./search/category/BABY TOYS AND GAMES">
          <img src="https://images-na.ssl-images-amazon.com/images/I/714-JHoDSbL._SY355_.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/BABY TOYS AND GAMES">
           <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572024540-81u-llvggsl-sl1500-1572024522.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/EDUCATIONAL TOYS">
           <img src="https://cdn.images.fecom-media.com/HE1820902_1427286-HOP-CON-W01.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/BABY RIDING TOYS">
           <img src="https://i.pinimg.com/originals/5a/7e/00/5a7e00e9e15783763a2e95f6ab6d160d.jpg" alt="" className="image--cover" >
           </img></a>
         </div>
         </div>
         </div>
         <div>
            <div className="topic8">TOYS FOR AGE 5+</div>       
               <div className="wrapper8">
            <a href="./search/category/TOYS AND GAMES">
          <img src="./images/toys.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/GIRLS TOYS AND TEDDIES">
           <img src="./images/gga.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/EDUCATIONAL TOYS">
           <img src="./images/edt.jpg" alt="" className="image--cover" >
           </img></a>
         </div>
         </div>
         </div>

         );
}