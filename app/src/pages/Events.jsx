import React from "react";

// Sample data for events
const events = [
  {
    id: 1,
    name: "Community Clean-Up",
    date: "Saturday, 9:00 AM",
    location: "Mosque Grounds",
    description:
      "Join us for a community clean-up event to help keep our mosque clean and welcoming for everyone."
  },
  {
    id: 2,
    name: "Ramadan Food Drive",
    date: "Next Wednesday, 5:00 PM",
    location: "Mosque Kitchen",
    description:
      "Help us pack and distribute food packages to those in need during Ramadan."
  },
  {
    id: 3,
    name: "Eid Decoration Setup",
    date: "Eid Eve, 6:00 PM",
    location: "Main Hall",
    description:
      "Assist in setting up decorations for Eid celebrations to make the event special for the community."
  },
  {
    id: 3,
    name: "Eid Decoration Setup",
    date: "Eid Eve, 6:00 PM",
    location: "Main Hall",
    description:
      "Assist in setting up decorations for Eid celebrations to make the event special for the community."
  },
  {
    id: 3,
    name: "Eid Decoration Setup",
    date: "Eid Eve, 6:00 PM",
    location: "Main Hall",
    description:
      "Assist in setting up decorations for Eid celebrations to make the event special for the community."
  },
  {
    id: 3,
    name: "Eid Decoration Setup",
    date: "Eid Eve, 6:00 PM",
    location: "Main Hall",
    description:
      "Assist in setting up decorations for Eid celebrations to make the event special for the community."
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6 md:p-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-2 uppercase text-white tracking-widest">
          Upcoming  Events
        </h1>
        <p className="text-lg text-gray-300">
          Participate in upcoming events to support our community and connect
          with fellow volunteers.
        </p>
      </section>

      {/* Events Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-base-300 shadow-lg rounded-lg p-6 border border-base-100 flex flex-col justify-between h-[22rem]"
          >
            <div>
              <h2 className="text-2xl font-semibold  mb-2 text-blue-100">
                {event.name}
              </h2>
              <div className="text-sm text-gray-400 mb-1">
                <span className="font-semibold">Date:</span> {event.date}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </div>
              <p className="text-gray-300 mb-6 h-20 overflow-hidden leading-relaxed">
                {event.description}
              </p>
            </div>
            <button
              className="btn btn-primary w-full py-2 rounded-full text-lg font-medium hover:bg-primary-focus transition-colors bg-blue-500 text-white"
              onClick={() => alert(`Details for ${event.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;