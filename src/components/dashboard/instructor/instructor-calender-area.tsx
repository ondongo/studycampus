'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin for day views
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; // Import the interaction plugin for date selection
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin for week/day views
import Image from "next/image";

import announce_icon from '@/assets/img/dashboard/icon/announcement-icon.svg';
import useGlobalContext from '@/hooks/use-global-context';



export default function InstructorCalenderArea() {
    const handleDateClick = (arg:DateClickArg) => {
        alert(`Date clicked: ${arg.dateStr}`);
    };
    
    const {handleAnnounceAddEditModal,handleAnnounceDetailsModal} = useGlobalContext();
    return (
        <div className="tpd-dashboard-calender-box">
             <div className="row">
               <div className="col-12">
                  <div className="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-70">
                     <div className="tpd-announcement-info d-flex align-items-center">
                        <div className="tpd-announcement-icon">
                           <span><Image src={announce_icon} alt="icon" /></span>
                        </div>
                        <div className="tpd-announcement-notification">
                           <span>Create Announcement</span>
                           <h4 className="tpd-announcement-notification-title">Notify all students of your course</h4>
                        </div>
                     </div>
                     <div className="text-lg-end">
                        <button className="tpd-border-btn active" onClick={()=>handleAnnounceAddEditModal()}>Add New Announcement</button>
                     </div>
                  </div>
               </div>
            </div>
            <FullCalendar
               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Specify the plugins
               initialView="dayGridMonth" // Set the initial view to month
               height="600px" // Set the height of the calendar
               expandRows={true} // Expand rows to fit content
               slotMinTime="08:00" // Minimum time slot for the time grid
               slotMaxTime="20:00" // Maximum time slot for the time grid
               headerToolbar={{
                   left: 'prev,next today', // Add today button for quick navigation
                   center: 'title', // Center title
                   right: 'dayGridMonth,timeGridWeek,timeGridDay', // Specify views for the right section
               }}
               initialDate={new Date()} // Set the initial date
               navLinks={true} // Can click day/week names to navigate views
               editable={true} // Allow editing of events
               selectable={true} // Allow selection of dates
               dateClick={handleDateClick} // Handle date clicks
            />
        </div>
    );
};
