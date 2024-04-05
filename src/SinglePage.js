import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import './Styles/SinglePage.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import FormatPrice from "./Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import Star from "./Components/Star";
import AddToCart from "./Components/AddToCart";



const API="https://luzesole-api.up.railway.app/api/products"
const SinglePage=()=>{
    const {getSingleProduct,  isSingleLoading, singleProduct} = useProductContext();
    const {id} = useParams();
    const [mainImage, setMainImage] = useState(null);

    useEffect(()=>{
        getSingleProduct(`${API}?_id=${id}`);
    },[]);
    
    useEffect(() => {
        // Set the main image to the first image initially
        if (singleProduct.length > 0) {
            setMainImage(singleProduct[0]?.img_ref);
        }
    }, [singleProduct]);
    
    const {_id,brand,img_ref,description,reviews,stock,rating,name,price,img1,img2,img3 } = singleProduct[0] || {};

    // const img3 = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edd9ed4ed4a0438bae1cadb901365eee_9366/RUNMAGICA_SHOES_Black_EY2975_01_standard.jpg";
    
    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc);
    };
    
    if(isSingleLoading){
        return <Loader/>;
    }


    return(
        <>
        <Header/>
        <div style={{margin:"100px"}} className="product-container container">
            <div className="row">
            <div className=" product-img col-lg-8 col-md-8 col-sm-12">
                
            <div className="grid grid-four-column">
                { [img_ref, img1, img2, img3].map((img, index) => (
                    <figure key={index} onClick={() => handleThumbnailClick(img)}>
                        <img src={img} alt={name}/>
                    </figure>
                ))}
              </div>  
              <div className=" main-screen">
                  <img className="main-screen-img" src={mainImage} alt={name}/>
              </div>
            </div>
            <div className="product-info col-lg-4 col-md-4 col-sm-12">
                <h2  className="product-name">{name} </h2>
                <Star stars={rating} reviews={reviews} />
                <p className="product-data-price">
                    MRP:  <del>
                        <FormatPrice price={price + (price*0.15)}/>
                    </del>
                </p>
                <p className="product-set-price">
                    Deal of the Day:  
                </p>
                    <h5 className="price"><FormatPrice price={price}/></h5>
                <p >Prices include GST</p>
                <p className="description">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <LiaShippingFastSolid  className="warranty-icon" />
                <p>FedEx Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              
              <p>
                ID : <span> {_id} </span>
              </p>
              <p>
                Brand :<span style={{textTransform:"capitalize"}}> {brand} </span>
              </p>
              <p>
                Available Stocks:  <span> {stock} </span>
              </p>
            </div>
            <hr/>
            <AddToCart product={singleProduct[0]} />
                
            </div></div>
        </div>
            
        <Footer/>
        </>
        
    )
}
export default SinglePage;
