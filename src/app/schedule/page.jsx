"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/Footer";
import rawSchedule from "./data.json";
import Image from "next/image";

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
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to fix CSS loading issue
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredEvents = selectedDay.events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesVenue =
      selectedVenue === "All Venues" ||
      event.venue.toLowerCase() === selectedVenue.toLowerCase();
    return matchesSearch && matchesVenue;
  });

  if (!isMounted) {
    return null; // Return null on first render to prevent flash of unstyled content
  }

  return (
    <>
      <Header />  
      <div className="bg-black text-[#a01330] min-h-screen relative mt-20">
        {/* Top left mandala image */}
        <div className="absolute -top-10 -left-20 z-10 overflow-hidden pointer-events-none">
          <div className="animate-spin-slow w-[70vw] h-[70vw] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/mandala.png"
              alt="Background"
              width={500}
              height={500}
              layout="responsive"
              priority
            />
          </div>
        </div>
        
        {/* Bottom right mandala image */}
        <div className="absolute -bottom-10 -right-10 z-10 overflow-hidden pointer-events-none">
          <div className="animate-spin-slow w-[70vw] h-[70vw] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/mandala.png"
              alt="Background"
              width={500}
              height={500}
              layout="responsive"
              priority
            />
          </div>
        </div>
        
        <div className="px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-12 relative z-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              COCHIN UNIVERSITY ARTS FEST – SARGAM 2025
            </h1>

            {/* Day selection - centered and responsive */}
            <div className="relative mb-4 sm:mb-6">
              <div className="flex justify-center">
                <div className="w-full max-w-full overflow-x-auto py-3 no-scrollbar px-2">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-min mx-auto justify-center">
                    {schedule.map((dayItem, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDay(dayItem)}
                        className={`p-2 sm:p-3 border rounded-md min-w-[100px] sm:min-w-[110px] bg-[#a01330] border-[#a01330] text-white text-center flex-shrink-0 transition-all hover:shadow-lg hover:shadow-[#a01330]/40 hover:translate-y-[-3px] ${
                          selectedDay.day === dayItem.day
                            ? "bg-[#a01330] text-white ring-2 ring-white/50"
                            : ""
                        }`}
                      >
                        <div className="font-bold text-sm sm:text-base">{dayItem.day}</div>
                        <div className="text-xs sm:text-sm">{dayItem.date}</div>
                        <div className="text-xs sm:text-sm">{dayItem.weekday}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-5 sm:mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                {selectedDay.day} - {selectedDay.date} ({selectedDay.weekday})
              </h2>
              <p className="text-base sm:text-lg mt-1 sm:mt-2">{filteredEvents.length} Events</p>
            </div>

            <div className="mb-5 sm:mb-6 lg:mb-8">
              <div className="space-y-3 sm:space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:space-y-0 lg:gap-3">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="p-2 sm:p-3 bg-black border border-[#a01330] text-white rounded-md w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#a01330] placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                  className="p-2 sm:p-3 bg-black border border-[#a01330] rounded-md text-white w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#a01330]"
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
            </div>

            {/* Grid View - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="border border-[#a01330] text-white rounded-lg p-3 sm:p-4 bg-[#1a0309] transition-all hover:bg-[#220409]"
                >
                  <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">{event.name}</h3>
                  <div className="space-y-1">
                    <p className="flex items-start text-sm sm:text-base">
                      <span className="font-semibold min-w-[60px] sm:min-w-16 inline-block">
                        Time:
                      </span>
                      <span>{event.time}</span>
                    </p>
                    <p className="flex items-start text-sm sm:text-base">
                      <span className="font-semibold min-w-[60px] sm:min-w-16 inline-block">
                        Venue:
                      </span>
                      <span className="break-words">{event.venue}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-8 sm:py-10 border border-[#a01330]/30 rounded-lg mb-8 sm:mb-10">
                <p className="text-base sm:text-lg text-white">No events match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedVenue("All Venues");
                  }}
                  className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 border border-[#a01330] text-white rounded-md hover:bg-[#a01330] hover:text-white transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
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
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}