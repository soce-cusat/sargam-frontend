"use client";

import React, { useState } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/Footer";
import rawSchedule from "./data.json";

const schedule = rawSchedule.map((day) => {
  const parts = day.Day.split(" ");
  const dayName = parts[0];
  const date = parts[1];
  const weekday = parts[2];

  const events = day.Stages.reduce((acc, stage) => {
    const rawStage = stage.Stage;
    let venue = rawStage;
    const match = rawStage.match(/\((.*?)\)/);
    if (match) {
      venue = match[1].trim();
      venue = venue
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      venue = rawStage.replace(/\s+/g, " ").trim();
    }

    const stageEvents = stage.Events.map((event) => ({
      name: event.Event,
      time: event.Time,
      venue: venue,
    }));
    return acc.concat(stageEvents);
  }, []);

  return {
    day: dayName,
    date,
    weekday,
    events,
  };
});

const venues = [
  "All Venues",
  "Seminar Complex",
  "SMS Hall",
  "Mini hall-seminar complex",
  "Polymer",
  "Photonics",
  "Stage-6",
  "Stage-7",
  "Triangle Park",
  "Stage-9",
  "Amenity",
  "Stage-11",
];

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(schedule[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("All Venues");
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'card'

  const filteredEvents = selectedDay.events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesVenue =
      selectedVenue === "All Venues" ||
      event.venue.toLowerCase() === selectedVenue.toLowerCase();
    return matchesSearch && matchesVenue;
  });

  const groupedByTime = {};
  filteredEvents.forEach((event) => {
    if (!groupedByTime[event.time]) {
      groupedByTime[event.time] = [];
    }
    groupedByTime[event.time].push(event);
  });

  return (
    <>
      <Header />
      <div className="bg-black text-[#a01330] min-h-screen px-4 py-46 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            COCHIN UNIVERSITY ARTS FEST – SARGAM 2025
          </h1>

          <div className="flex overflow-x-auto py-3 no-scrollbar -mx-2 md:mx-66 px-2">
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {schedule.map((dayItem, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(dayItem)}
                  className={`p-2 sm:p-3 border rounded-md min-w-[110px] text-center flex-shrink-0 transition-colors ${
                    selectedDay.day === dayItem.day
                      ? "bg-[#a01330] text-white"
                      : "border-[#a01330] hover:bg-[#a0133020]"
                  }`}
                >
                  <div className="font-bold">{dayItem.day}</div>
                  <div>{dayItem.date}</div>
                  <div>{dayItem.weekday}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl md:text-2xl font-bold">
            {selectedDay.day} - {selectedDay.date} ({selectedDay.weekday})
          </h2>
          <p className="text-lg mt-2">{filteredEvents.length} Events</p>
        </div>

        <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-4 sm:space-y-4 sm:col-span-2 lg:space-y-0 lg:flex lg:items-center lg:gap-3 lg:flex-grow">
            <input
              type="text"
              placeholder="Search events..."
              className="p-3 bg-black border border-[#a01330] rounded-md w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#a01330]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="p-3 bg-black border border-[#a01330] rounded-md w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#a01330]"
              value={selectedVenue}
              onChange={(e) => setSelectedVenue(e.target.value)}
            >
              {venues.map((venue, index) => (
                <option key={index} value={venue}>
                  {venue}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 justify-center sm:justify-end">
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-3 border border-[#a01330] rounded-md transition-colors ${
                viewMode === "list"
                  ? "bg-[#a01330] text-white"
                  : "hover:bg-[#a0133020]"
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode("card")}
              className={`px-4 py-3 border border-[#a01330] rounded-md transition-colors ${
                viewMode === "card"
                  ? "bg-[#a01330] text-white"
                  : "hover:bg-[#a0133020]"
              }`}
            >
              Card View
            </button>
          </div>
        </div>

        {viewMode === "list" && (
          <div className="space-y-5">
            {Object.keys(groupedByTime)
              .sort()
              .map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className="border border-[#a01330] rounded-lg p-4 sm:p-5 transition-all hover:bg-[#0c0103]"
                >
                  <h3 className="font-bold text-lg mb-3 pb-2 border-b border-[#a01330]/30">
                    {time}
                  </h3>
                  <div className="space-y-4">
                    {groupedByTime[time].map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="border-l-4 border-[#a01330] pl-3 py-2 hover:bg-[#a0133010] transition-colors rounded-r"
                      >
                        <h4 className="font-bold text-base sm:text-lg">
                          {event.name}
                        </h4>
                        <p className="text-sm sm:text-base mt-1">
                          Venue: {event.venue}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {viewMode === "card" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="border border-[#a01330] rounded-lg p-4 hover:bg-[#1a0309] transition-colors"
              >
                <h3 className="font-bold text-lg mb-2">{event.name}</h3>
                <div className="space-y-1">
                  <p className="flex items-start">
                    <span className="font-semibold min-w-16 inline-block">
                      Time:
                    </span>
                    <span>{event.time}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold min-w-16 inline-block">
                      Venue:
                    </span>
                    <span>{event.venue}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-10 border border-[#a01330]/30 rounded-lg">
            <p className="text-lg">No events match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedVenue("All Venues");
              }}
              className="mt-4 px-4 py-2 border border-[#a01330] rounded-md hover:bg-[#a01330] hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      <Footer />

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
