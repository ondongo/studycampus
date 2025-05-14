import Image from "next/image";
import { CloseThreeSvg, SearchSvg, StarThree } from "../svg";
import { online_courses_data } from "@/data/course-data";
import { formatPrice } from "@/lib/format-price";
import Link from "next/link";

const top_programs = [...online_courses_data].slice(0, 4);

type IProps = {
   isSearchOpen: boolean;
   onHide: () => void;
}

export default function SearchPopup({ isSearchOpen, onHide }: IProps) {
   return (
      <>
         <div className={`tp-search-area ${isSearchOpen ? 'opened' : ''}`}>
            <div className="tp-search-inner p-relative">
               <div className="tp-search-close">
                  <button className="tp-search-close-btn" onClick={onHide}>
                     <CloseThreeSvg clr="#57595F" />
                  </button>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="tp-search-wrapper">
                        <div className="col-lg-9">
                           <div className="tp-search-content blue">
                              <div className="search p-relative">
                                 <input type="text" className="search-input" placeholder="What are you looking for?" />
                                 <button className="tp-search-icon">
                                    <SearchSvg />
                                 </button>
                              </div>
                              <div className="tp-search-course-wrap">
                                 <h3 className="tp-search-course-title">OUR TOP Program</h3>
                                 <div className="row">
                                    {top_programs.map((item) => (
                                       <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                                          <div className="tp-search-course-item mb-30">
                                             <div className="tp-search-course-thumb mb-5">
                                                <Link href={`/course-details/${item.id}`}>
                                                   <Image src={item.thumbnail} alt="search-img" width={186} height={104} />
                                                </Link>
                                             </div>
                                             <div className="tp-search-course-content">
                                                <div className="tp-search-course-star">
                                                   <span><StarThree /></span>
                                                   <span><StarThree /></span>
                                                   <span><StarThree /></span>
                                                   <span><StarThree /></span>
                                                   <span><StarThree /></span>
                                                </div>
                                                <h4 className="tp-search-course-item-title">
                                                   <Link href={`/course-details/${item.id}`}>
                                                     {item.category}
                                                   </Link>
                                                </h4>
                                                <div className="tp-search-course-price">
                                                   <span>{formatPrice(item.price, true)}</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div onClick={onHide} className={`body-overlay ${isSearchOpen?'opened':''}`}></div>
      </>
   )
}
