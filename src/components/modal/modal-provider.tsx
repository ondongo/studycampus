'use client';
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const modalRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            modalRef.current = document.body;
        }
    }, []);
    return (
        <>
            {modalRef.current && createPortal(
                <React.Fragment>
                    {children}
                </React.Fragment>,
                modalRef.current
            )}
        </>
    )
}
