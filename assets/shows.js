'use strict';

document.addEventListener("DOMContentLoaded", () => {

    // --- Your shows data ---
    const shows = [
        {
            date: "2025-08-31",
            venue: "Burdock Music Hall",
            location: "Toronto, ON",
            details: ''
        },        
        {
            date: "2025-10-28",
            venue: "The Painted Lady",
            location: "Toronto, ON",
            details: ''
        },
        {
            date: "2025-12-13",
            venue: "Sneaky Dee's",
            location: "Toronto, ON",
            details: ''
        }
    ];

    // --- Build show cards dynamically ---
    const today = new Date();
    const upcomingContainer = document.querySelector("#upcoming-shows .shows-list");
    const pastContainer = document.querySelector("#past-shows .shows-list");

    shows
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // sort by date ascending
        .forEach(show => {

            const dateStr = show.date;
            const [year, month, day] = dateStr.split('-').map(Number);
            const showDate = new Date(year, month - 1, day);

            const formatted = showDate.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric"
            });

            const card = document.createElement("div");
            card.className = "show-card";
            card.innerHTML = `
          <div class="show-date">${formatted}</div>
          <div class="show-details">
            <div class="show-venue">${show.venue}</div>
            <div class="show-location">${show.location}</div>
          </div>
          ${show.details ? `<div class="show-link">${show.details}</div>` : ""}
        `;

            if (showDate >= today) {
                upcomingContainer.appendChild(card);
            } else {
                card.classList.add("past");
                pastContainer.prepend(card); // add past shows newest first
            }
        });
});