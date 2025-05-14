import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RightSmArrow } from "../svg";
import book_img from '@/assets/img/shop/product/shop-product-9.jpg';

export default function CtaFour() {
  return (
    <section className="tp-shop-cta-area pb-100">
      <div className="container">
        <div
          className="tp-shop-cta-bg p-relative"
          style={{ backgroundImage: "url(/assets/img/shop/product/shop-product-10.jpg)" }}
        >
          <div className="tp-shop-cta-thumb">
            <Image src={book_img} alt="book-img" style={{ height: "auto" }} />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="tp-shop-cta-heading">
                <span>Book festival</span>
                <h3 className="tp-shop-cta-title">book of the Year</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-shop-cta-btn text-start text-lg-end">
                <Link href="/shop-grid">
                  Shop Now{" "}
                  <span>
                    <RightSmArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
