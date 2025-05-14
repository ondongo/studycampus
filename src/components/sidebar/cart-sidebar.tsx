'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import empty_cart_img from '@/assets/img/cartmini/empty-cart.png';
import { online_courses_data } from '@/data/course-data';
import { formatPrice } from '@/lib/format-price';
import { removeTagInText } from '@/utils';

// prop type 
type IProps = {
    openSidebar: boolean;
    onShowSidebar: () => void;
}

const CartMiniSidebar = ({ openSidebar, onShowSidebar }: IProps) => {
  const cart_products = [...online_courses_data].slice(0, 3);
  return (
    <>
      <div className={`cartmini__area ${openSidebar ? 'cartmini-opened' : ''}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Shopping cart</h4>
              </div>
              <div className="cartmini__shipping home-shop">
               <p> Free Shipping for all orders over <span>$50</span></p>
               <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0}aria-valuemax={100}></div>
               </div>                   
               </div>
              <div className="cartmini__close">
                <button onClick={onShowSidebar} type="button" className="cartmini__close-btn cartmini-close-btn">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            {cart_products.length > 0 && <div className="cartmini__widget">
              {cart_products.map((item,i) => (
                <div key={i} className="cartmini__widget-item">
                  <div className="cartmini__thumb">
                    <a href='#'>
                      <Image src={`${item?.thumbnail}`} width={70} height={60} alt="product img" />
                    </a>
                  </div>
                  <div className="cartmini__content">
                    <h5 className="cartmini__title home-shop">
                      <a href="#">{removeTagInText(item.title)}</a>
                    </h5>
                    <div className="cartmini__price-wrapper">
                      <span className="cartmini__price home-shop">${item.price.toFixed(2)}</span>
                      <span className="cartmini__quantity">{" "}x{1}</span>
                    </div>
                  </div>
                  <a className="cartmini__del pointer">
                    <i className="fa-regular fa-xmark"></i>
                  </a>
                </div>
              ))}
            </div>
            }
            {/* if no item in cart */}
            {cart_products.length === 0 && <div className="cartmini__empty text-center">
              <Image src={empty_cart_img} alt="empty-cart-img" />
              <p>Your Cart is empty</p>
              <Link href="/shop" className="tp-btn">Go to Shop</Link>
            </div>}
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Subtotal:</h4>
              <span>{formatPrice(cart_products.reduce((a, b) => a + b.price, 0), true)}</span>
            </div>
            <div className="cartmini__checkout-btn home-shop">
              <Link href="/cart" onClick={onShowSidebar} className="tp-btn mb-10 w-100"> 
                 view cart
             </Link>
              <Link href="/checkout" onClick={onShowSidebar} className="tp-btn tp-btn-border w-100"> 
              checkout
             </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* overlay start */}
      <div onClick={onShowSidebar} className={`body-overlay ${openSidebar ? 'opened' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default CartMiniSidebar;