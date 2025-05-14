'use client'
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { CloseFourSvg } from "../svg";
import useGlobalContext from "@/hooks/use-global-context";
import announce_icon from '@/assets/img/dashboard/icon/announcement-icon.svg';


export default function AnnounceDetailsModal() {
   const { handleAnnounceDetailsModal,showAnnounceDetailsModal } = useGlobalContext();
   return (
      <>
         <Modal className="tpd-modal" show={showAnnounceDetailsModal} onHide={handleAnnounceDetailsModal} centered={true}>
            <div className="modal-header">
               <div className="tpd-modal-icon">
                  <span><Image src={announce_icon} alt="icon" /></span>
               </div>
               <h4 className="tpd-modal-title" id="exampleModalLabel">Design System in Figma</h4>
               <p>Discover our collection of premium templates</p>
               <button onClick={handleAnnounceDetailsModal} type="button" className="tpd-modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span>
                     <CloseFourSvg />
                  </span>
               </button>
            </div>
            <div className="modal-body">
               <div className="tpd-modal-content">
                  <div className="tpd-modal-course">
                     <span>Course</span>
                     <h4 className="tpd-modal-course-title"><a href="#">App Development</a></h4>
                  </div>
                  <div className="tpd-modal-info">
                     <span>Published</span>
                     <h4 className="tpd-modal-date">September 13, 2023</h4>
                     <h4 className="tpd-modal-time">10.32am</h4>
                  </div>
               </div>
            </div>
            <div className="modal-footer">
               <div className="tpd-modal-btn">
                  <button type="button" className="tpd-btn-cancel" data-bs-dismiss="modal">Cancel</button>
               </div>
               <div className="tpd-modal-btn-wrap">
                  <button type="button" className="tpd-btn-delete" data-bs-dismiss="modal">Delete</button>
                  <button type="button" className="tpd-btn-edit ml-10" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Edit</button>
               </div>
            </div>
         </Modal>
      </>
   )
}
