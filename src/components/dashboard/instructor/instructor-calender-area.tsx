"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // Import the dayGrid plugin for day views
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // Import the interaction plugin for date selection
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin for week/day views
import Image from "next/image";

import announce_icon from "@/assets/img/dashboard/icon/announcement-icon.svg";
import useGlobalContext from "@/hooks/use-global-context";
import { CalenderSvg } from "@/components/svg/dashboard-icons";
import { useEvenements } from "@/hooks/use-evenements";

export default function InstructorCalenderArea() {
  const { evenements, loading, error, lastRefresh } = useEvenements();
  const { handleEvenementAddEditModal } = useGlobalContext();

  const handleDateClick = (arg: DateClickArg) => {
    handleEvenementAddEditModal(undefined, arg.date);
  };


  const events = evenements.map((evenement) => ({
    id: evenement.id,
    title: evenement.title,
    start: evenement.dateDebut,
    end: evenement.dateFin,
    description: evenement.description,
    backgroundColor: evenement.etat ? "#4CAF50" : "#9E9E9E",
    borderColor: evenement.etat ? "#4CAF50" : "#9E9E9E",
    textColor: "#ffffff",
  }));

  return (
    <div className="tpd-dashboard-calender-box">
      <div className="row">
        <div className="col-12">
          <div className="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-70">
            <div className="tpd-announcement-info d-flex align-items-center">
              <div className="tpd-announcement-icon">
                <span>
                  {" "}
                  <CalenderSvg />
                </span>
              </div>
            </div>
            <div className="text-lg-end">
              <button
                className="tpd-border-btn active"
                onClick={() => handleEvenementAddEditModal()}
              >
                Ajouter un événement
              </button>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <FullCalendar
        key={lastRefresh}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Specify the plugins
        initialView="dayGridMonth" // Set the initial view to month
        height="600px" // Set the height of the calendar
        expandRows={true} // Expand rows to fit content
        slotMinTime="08:00" // Minimum time slot for the time grid
        slotMaxTime="20:00" // Maximum time slot for the time grid
        headerToolbar={{
          left: "prev,next today", // Add today button for quick navigation
          center: "title", // Center title
          right: "dayGridMonth,timeGridWeek,timeGridDay", // Specify views for the right section
        }}
        initialDate={new Date()} // Set the initial date
        navLinks={true} // Can click day/week names to navigate views
        editable={true} // Allow editing of events
        selectable={true} // Allow selection of dates
        dateClick={handleDateClick} // Handle date clicks
        events={events} // Display events from state
        eventClick={(info) => {
          // Optionnel : Ouvrir la modale en mode édition quand on clique sur un événement
          const evenement = evenements.find((e) => e.id === info.event.id);
          if (evenement) {
            handleEvenementAddEditModal(evenement);
          }
        }}
        eventDrop={async (info) => {
          // Optionnel : Gérer le déplacement d'événements
          console.log("Event dropped:", info.event);
        }}
        eventResize={async (info) => {
          // Optionnel : Gérer le redimensionnement d'événements
          console.log("Event resized:", info.event);
        }}
      />
    </div>
  );
}
