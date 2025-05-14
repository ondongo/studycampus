'use client';
import bookData from "@/data/book-shop-data";
import { useEffect, useState } from "react"
import ShopItem from "./shop-item";
import shape_svg from '@/assets/img/shop/shop-shape.svg';
import Image from "next/image";


const nav_tabs = ['New Arrival','Featured Products','Best Seller']

export default function ShopArea() {
const [activeTab,setActiveTab] = useState('Featured Products');
const [filterBooks,setFilterBooks] = useState([...bookData.slice(0,8)]);

  useEffect(() => {
   if (activeTab === "Featured Products") {
     setFilterBooks([...bookData.slice(0,8)]);
   } else if (activeTab === "New Arrival") {
     setFilterBooks(bookData.slice(0, 4));
   } else if (activeTab === "Best Seller") {
     setFilterBooks(bookData.slice(4, 8));
   }
 }, [activeTab]);

  return (
    <section className="tp-shop-product-area pb-50">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="tp-shop-product-tab mb-60">
                  <ul className="nav nav-pills mb-3 justify-content-center">
                        {nav_tabs.map((nav,i) => (
                           <li key={i} className="nav-item">
                              <button onClick={() => setActiveTab(nav)} className={`nav-link ${activeTab === nav ? 'active' : ''}`}>{nav} <span>
                                    <Image src={shape_svg} alt="shape-svg"/></span>
                              </button>
                           </li>
                        ))}
                     </ul>
               </div>
            </div>
         </div>
         
         <div className="tab-content">
               <div className="row">
                  {filterBooks.map((book) => (
                  <div key={book.id} className="col-lg-3 col-sm-6">
                     <ShopItem item={book} />
                  </div>
                  ))}
               </div>
            </div>

      </div>
   </section>
  )
}
