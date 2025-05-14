'use client'
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import OffcanvasArea from "@/components/sidebar/offcanvas/offcanvas-area";

type Props = { children?: React.ReactNode; offcanvas_cls?: string; offcanvas_menu_2?: boolean };

export default function OffcanvasButton({ children, offcanvas_cls = '', offcanvas_menu_2 = false }: Props) {
   const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false);
   const [mounted, setMounted] = useState(false); // Add state to track mounting
   const modalRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      if (typeof window !== "undefined") {
         modalRef.current = document.getElementById("offcanvas-sidebar");
         setMounted(true); // Set mounted to true when the modal ref is assigned
      }
   }, []);

   const handleOffcanvasToggle = () => {
      setIsOpenOffcanvas(!isOpenOffcanvas);
   };

   return (
      <>
         <button onClick={handleOffcanvasToggle} className="offcanvas-open-btn">
            {children ? children : <i className="fa-solid fa-bars"></i>}
         </button>

         {/* Only create the portal if modalRef.current is available and mounted is true */}
         {mounted && modalRef.current && createPortal(
            <React.Fragment>
               <OffcanvasArea openOffCanvas={isOpenOffcanvas} onHandleOffCanvas={handleOffcanvasToggle} offcanvas_cls={offcanvas_cls} offcanvas_menu_2={offcanvas_menu_2} />
            </React.Fragment>,
            modalRef.current
         )}
      </>
   );
}
