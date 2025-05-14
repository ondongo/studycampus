'use client'
import React from "react";
import { SearchSvgTwo } from "@/components/svg";
import SearchPopup from "@/components/modal/search-popup";

type SearchButtonProps = {
   icon?: React.ReactNode;
};

export default function SearchButton({ icon }: SearchButtonProps) {
   const [isSearchOpen, setIsSearchOpen] = React.useState(false);

   const handleSearchToggle = () => {
      setIsSearchOpen(!isSearchOpen);
   };

   return (
      <>
         <button className="tp-search-open-btn" onClick={handleSearchToggle}>
            {icon || <SearchSvgTwo/>}
         </button>

         <SearchPopup isSearchOpen={isSearchOpen} onHide={handleSearchToggle} />

      </>
   );
}
