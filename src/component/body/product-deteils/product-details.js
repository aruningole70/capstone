import React, { useState } from "react";
import '../../../App.css';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { incNumber , decNumber, addToCart } from '../../../redux/acion/index';
function Product() {
    

    const myState = useSelector((state) => state.Change);
    // const myProductState = useSelector((state) => state.addCart);
    const { id } = useParams();
    // let productDetails = {};
    // console.log("",id);
    const [product, setProduct] = useState([]);
    const  dispatch = useDispatch();

    const getProducts =async()=>{
        const response= await fetch(`https://fakestoreapi.com/products/${id}`);
                 const data=await response.json();
                 setProduct(data);
     }
     
       useEffect(()=>{ 
             getProducts();
         },[id]);

    // useEffect(() => {
    //     // fetch('https://fakestoreapi.com/products/${id}')
    //     // .then((res) => res.json())
    //     // .then((data) => productDetails = data);
    //   }, []);

    return (
        <div className="product-detail">
            <div className="aem-Grid aem-Grid--12 demo-Grid">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                    <div className="aem-Grid aem-Grid--12 demo-Grid image-section">
                        <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn sub-images">
                            <div className="sub-images">
                                <div className="sub-img-style"><img src={product.image}alt="here is product image" /></div>
                                <div className="sub-img-style" ><img src={product.image}alt="here is product image" /></div>
                                <div className="sub-img-style"><img src={product.image}alt="here is product image" /></div>
                                <div className="sub-img-style"><img src={product.image}alt="here is product image" /></div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn main-image">
                            <img src={product.image} alt="here is product image" />
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn product-details">
                    <div className="title">
                        <h1>{product.category}</h1>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <p>
                            <img src="../../../logo/star.svg" alt="give rating to product" />
                            <img src="../../../logo/star.svg" alt="give rating to product" />
                            <img src="../../../logo/star.svg" alt="give rating to product" />
                            <img src="../../../logo/star.svg" alt="give rating to product" />
                            <img src="../../../logo/star1.svg" alt="give rating to product" />(175)
                        </p>
                        <p><span>{product.description}</span></p>
                    </div>
                     <hr /> 
                    <div className="product-button">
                        <div className="color-button">
                            <p>Color</p>
                            <button className="button1"><img src="../../../images/Swatch 01.png" alt="give rating to product" /></button>&nbsp;  &nbsp;
                            <button className="button2"><img src="../../../images/Swatch 02.png" alt="give rating to product" /></button>&nbsp;  &nbsp;
                            <button className="button3"><img src="../../../images/Swatch 03.png" alt="give rating to product" /></button>&nbsp;  &nbsp;
                            <button className="button4"><img src="../../../images/Swatch 04.png" alt="give rating to product" /></button>&nbsp;  &nbsp;
                        </div>
                        <div className="size-buttons">
                            <p>Size</p>
                            <button>XS</button>&nbsp;  &nbsp;
                            <button>S</button>&nbsp;  &nbsp;
                            <button>M</button>&nbsp;  &nbsp;
                            <button>L</button>&nbsp;  &nbsp;
                            <button>XL</button>&nbsp;  &nbsp;
                        </div>
                        <div className="quentity-button">
                            <p>Quantity</p>
                            <button onClick={() =>dispatch(decNumber())}><img src={"../../../logo/minus-circle.svg"} alt="photo" /></button>
                            <input type="text" value={myState.count} />
                            <button onClick={() =>dispatch(incNumber())}><img src={"../../../logo/plus-circle.svg"} alt="photo" /></button>
                        </div>
                        <div className="add-cart-button">
                            <button onClick={() =>dispatch(addToCart(product))}>ADD TO CART</button>
                        </div>
                        <div className="shair-buttan">
                            <button><img src={"../../../logo/heart.svg"} alt="photo" />Save</button>
                            <button><img src={"../../../logo/share-2.svg"} alt="photo" />Share</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 demo-Grid product-bottom">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColum ">
                    <h1>{product.title}</h1>
                    <h6>Description</h6>
                    <p>{product.description}</p>
                    <span><img src={"../../../images/max-width_header.svg"} alt="photo" /></span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColum">
                    <h4>Details</h4>
                    <div className="p-logo">
                        <li><img src={"../../../images/slack.svg"} alt="photo" />Sweat-wicking</li>
                        <li><img src={"../../../images/coffee.svg"} alt="photo" />Breathable</li>
                    </div>
                    <div className="p-logo2">
                    <li><img src={"../../../images/feather.svg"} alt="photo" />Lightweight fabric</li>
                        <li><img src={"../../../images/layers.svg"} alt="photo" />69% nylon, 31% lycra</li>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;