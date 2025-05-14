'use client';
import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/use-global-context";
import { CloseFourSvg } from "../svg";
import { Modal } from "react-bootstrap";

export default function AnnouncementModal() {
   const { showAnnounceAddEditModal,handleAnnounceAddEditModal,announceEditMode:edit } = useGlobalContext();
   const [announcement, setAnnouncement] = useState<string>(edit? edit.announcement:'');
   const [title, setTitle] = useState<string>(edit? edit.courseTitle:'');

   useEffect(() => {
      if (edit) {
         setAnnouncement(edit.announcement || ''); 
         setTitle(edit.courseTitle || '');
      } else {
         setAnnouncement(''); 
         setTitle('');
      }
   }, [edit]);

   return (
      <>
         <Modal className="tpd-modal-announcement" show={showAnnounceAddEditModal} onHide={handleAnnounceAddEditModal} centered={true}>
            <div className="modal-header">
               <h4 className="tpd-modal-title" id="exampleModaltow">{edit ? 'Edit' : 'Create'} Announcement</h4>
               <button onClick={() => handleAnnounceAddEditModal()} type="button" className="tpd-modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span>
                     <CloseFourSvg />
                  </span>
               </button>
            </div>
            <div className="modal-body">
               <form>
                  <div className="tpd-input-white mb-20">
                     <label>Course Name</label>
                     <input type="text" placeholder="Announcement" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} />
                  </div>
                  <div className="tpd-input-white mb-20">
                     <label>Course Title</label>
                     <input type="text" placeholder="course title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="tpd-input-white">
                     <label htmlFor="message-text" className="col-form-label">Summary</label>
                     <textarea className="form-control" id="message-text" placeholder="Lorem Ipsum...."></textarea>
                  </div>
               </form>
            </div>
            <div className="modal-footer">
               <button type="button" data-bs-dismiss="modal" aria-label="Close" className="tpd-btn-cancel">Cancel</button>
               <button type="submit" className="tpd-btn-edit ml-10">Publish</button>
            </div>
         </Modal>
      </>
   )
}
