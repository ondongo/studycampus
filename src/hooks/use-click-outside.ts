import React, { useEffect, useRef } from "react";

export default function useClickOutside(setOpenActionId:React.Dispatch<React.SetStateAction<number | null>>) {
    const actionButtonRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (actionButtonRef.current && !actionButtonRef.current.contains(event.target as Node)) {
            setOpenActionId(null);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
     }, [setOpenActionId]);

    return actionButtonRef;
}