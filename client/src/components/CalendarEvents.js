import { useEffect, useState } from "react";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Use environment variables
  const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          // Filter out past events
          const now = new Date();
          const upcomingEvents = data.items.filter(event => {
            const eventDate = new Date(event.start.dateTime || event.start.date);
            return eventDate >= now; // Keep only upcoming events
          });

          const sortedEvents = upcomingEvents.sort(
            (a, b) =>
              new Date(a.start.dateTime || a.start.date) -
              new Date(b.start.dateTime || b.start.date)
          );
          setEvents(sortedEvents);
        }
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, [API_KEY, CALENDAR_ID]);

  const formatDate = (dateTime) =>
    new Date(dateTime).toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  const formatTime = (dateTime) =>
    new Date(dateTime).toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const groupEventsByDate = (events) =>
    events.reduce((grouped, event) => {
      const date = formatDate(event.start.dateTime || event.start.date);
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(event);
      return grouped;
    }, {});

  const openModal = (event) => {
    const cleanedDescription = event.description
      ? event.description
          .replace(/Join us for an amazing event!.*?\nFor tickets, visit: https:\/\/yourwebsite\.com\/tickets/g, '')
          .replace(/(https?:\/\/[^\s]+)/g, '')
          .trim()
      : '';

    const ticketURL = extractTicketURL(event.description);
    setSelectedEvent({ ...event, description: cleanedDescription, ticketURL });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const extractTicketURL = (description) => {
    if (!description) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = description.match(urlRegex);
    return matches ? matches[0].replace(/"$/, '') : null; // Remove trailing quote if present
  };

  const groupedEvents = groupEventsByDate(events);

  return (
    <div className="bg-black text-white flex flex-col items-center py-8 px-4">
      <h2 className="text-4xl mb-10 text-center">Upcoming Events</h2>

      {Object.entries(groupedEvents).map(([date, events]) => (
        <div key={date} className="w-full max-w-6xl mb-8">
          <h3 className="text-3xl text-white mb-4 border-b border-[#5f6813] pb-2">
            {date}
          </h3>

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#0D0D0D] p-5 rounded-lg shadow-md mb-4 border border-[#5f6813] hover:shadow-lg transform transition hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(event)}
            >
              <h2 className="text-3xl mb-2 text-white tracking-wide">{event.summary}</h2>
              <p className="text-white font-normal text-base">
                {formatTime(event.start.dateTime || event.start.date)} -{" "}
                {formatTime(event.end.dateTime || event.end.date)}
              </p>
            </div>
          ))}
        </div>
      ))}

      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4 overflow-hidden">
          <div className="bg-[#0D0D0D] rounded-lg p-6 w-full max-w-md max-h-full overflow-y-auto">
            <h2 className="text-3xl mb-4 text-white">
              {selectedEvent.summary}
            </h2>

            <p className="text-white font-normal text-base mb-2">
              <span className="font-normaler">Start:</span>{" "}
              {formatTime(selectedEvent.start.dateTime || selectedEvent.start.date)}
            </p>
            <p className="text-white font-normal text-base mb-2">
              <span className="font-normaler">End:</span>{" "}
              {formatTime(selectedEvent.end.dateTime || selectedEvent.end.date)}
            </p>

            {selectedEvent.location && (
              <p className="text-white font-normal text-base mb-2">
                <span className="font-normaler">Location:</span>{" "}
                {selectedEvent.location}
              </p>
            )}

            {selectedEvent.description && (
              <div className="text-white font-normal text-base mt-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(selectedEvent.description.replace(/\n/g, '<br />')),
                  }}
                />
              </div>
            )}

            {selectedEvent.ticketURL && (
              <a
                href={selectedEvent.ticketURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full px-4 py-2 bg-SnapGreen text-white font-normal rounded-lg hover:bg-red-900 transition text-center block"
              >
                Purchase Tickets
              </a>
            )}

            <button
              onClick={closeModal}
              className="mt-4 w-full px-4 py-2 bg-SnapGreen text-white font-normal rounded-lg hover:bg-red-900 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;
