'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin for day views
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; // Import the interaction plugin for date selection
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin for week/day views

export default function InstructorCalenderArea() {
    const handleDateClick = (arg:DateClickArg) => {
        alert(`Date clicked: ${arg.dateStr}`);
    };

    return (
        <div className="tpd-dashboard-calender-box">
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
