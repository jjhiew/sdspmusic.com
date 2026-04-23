'use strict';

document.addEventListener("DOMContentLoaded", () => {

    // --- Your shows data ---
    const shows = [
        {
            date: "2025-08-31",
            venue: "Burdock Music Hall",
            location: "Toronto, ON",
            ticketUrl: ''
        },
        {
            date: "2025-10-28",
            venue: "The Painted Lady",
            location: "Toronto, ON",
            ticketUrl: ''
        },
        {
            date: "2025-12-13",
            venue: "Sneaky Dee's",
            location: "Toronto, ON",
            ticketUrl: ''
        },
        {
            date: "2026-02-20",
            venue: "Supermarket",
            location: "Toronto, ON",
            ticketUrl: 'https://www.ticketweb.ca/event/ominous-anonymous-album-release-show-supermarket-tickets/14076214?fbclid=PAT01DUAPUtuJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeYyTl0yhAeP39m5NDImghZVGmpgjXV4ZsAP36_2Gc8_4Z9a6NoIcF2pvINeQ_aem_mKA0araOEi35whGBQKQMAw'
        },
        {
            date: "2026-05-30",
            venue: "Sneaky Dee's",
            location: "Toronto, ON",
            ticketUrl: 'https://www.ticketweb.ca/event/saltwave-w-sdsp-the-lee-sneaky-dees-concert-venue-tickets/14866683'
        }        
    ];

    // --- Build show cards dynamically ---
    const today = new Date();
    // Normalize today to start of day for accurate comparison
    today.setHours(0, 0, 0, 0);

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

            // Only show ticket link if it's not past and URL exists
            const showTicketLink = show.ticketUrl && showDate >= today;
            const ticketLinkHtml = showTicketLink
                ? `<div class="show-link"><a href="${show.ticketUrl}" target="_blank">BUY TICKETS!</a></div>`
                : `<div class="show-link">TICKETS COMING SOON!</div>`;

            const card = document.createElement("div");
            card.className = "show-card";
            card.innerHTML = `
          <div class="show-date">${formatted}</div>
          <div class="show-details">
            <div class="show-venue">${show.venue}</div>
            <div class="show-location">${show.location}</div>
          </div>
          ${ticketLinkHtml}
        `;

            if (showDate >= today) {
                upcomingContainer.appendChild(card);
            } else {
                card.classList.add("past");
                pastContainer.prepend(card); // add past shows newest first
            }
        });
});