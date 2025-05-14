'use client'
import React, { useEffect, useRef, useState } from "react";
import { Cart } from "@/components/svg";
import CartMiniSidebar from "@/components/sidebar/cart-sidebar";
import { createPortal } from "react-dom";

type IProps = {
   icon?:JSX.Element;
}
export default function CartButton({icon=<Cart />}: IProps) {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [mounted, setMounted] = useState(false); // Add state to track mounting
   const modalRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      if (typeof window !== "undefined") {
         modalRef.current = document.getElementById("cart-mini-sidebar");
         setMounted(true); // Set mounted to true when the modal ref is assigned
      }
   }, []);

   const handleCartMiniToggle = () => {
      setIsCartOpen(!isCartOpen);
   };

   return (
      <>
         <button onClick={handleCartMiniToggle} className="cartmini-open-btn">
            <span>
               {icon}
            </span>
            <i>1</i>
         </button>

         {/* Only create the portal if modalRef.current is available and mounted is true */}
         {mounted && modalRef.current && createPortal(
            <React.Fragment>
               <CartMiniSidebar openSidebar={isCartOpen} onShowSidebar={handleCartMiniToggle} />
            </React.Fragment>,
            modalRef.current
         )}
      </>
   );
}
