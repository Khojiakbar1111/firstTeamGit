import React from "react";
import "./Product.css";
import ProductImg from "../../assets/bi_vector-pen.png";
import ProductImg1 from "../../assets/UI.png";
import ProductImg2 from "../../assets/fontisto_nav-icon-list.png";
import ProductImg3 from "../../assets/carbon_logo-delicious.png";
import ProductImg4 from "../../assets/bx_bx-code-alt.png";
import ProductImg5 from "../../assets/Group (3).png";
import ProductImg6 from "../../assets/ic_baseline-auto-awesome-motion.png";
const Product = () => {
  return (
    <div className="product" id="product">
      <div className="product-cards">
        <div className="product-card">
          <img src={ProductImg} alt="" />
          <h4>Product Design</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg1} alt="" />
          <h4>UX/UI Design</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg2} alt="" />
          <h4>Icon Design</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg3} alt="" />
          <h4>Icon Design</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg4} alt="" />
          <h4>Backend</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg5} alt="" />
          <h4>Frontend</h4>
        </div>
        <div className="product-card">
          <img src={ProductImg6} alt="" />
          <h4>Motion</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
