"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("All Venues");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    fetchSchedule();
  }, []);

  const convertToIST = (timeString) => {
    let hours, minutes, period;
    
    if (/^\d{1,2}:\d{2}\s?(?:AM|PM)$/i.test(timeString)) {
      const timeParts = timeString.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
      hours = parseInt(timeParts[1], 10);
      minutes = parseInt(timeParts[2], 10);
      period = timeParts[3].toUpperCase();
      
      if (period === "PM" && hours < 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
    }
    else if (/^\d{1,2}:\d{2}$/.test(timeString)) {
      const timeParts = timeString.split(":");
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
    }
    else {
      return timeString;
    }
    
    hours = hours + 5;
    minutes = minutes + 30;
    
    if (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }
    if (hours >= 24) {
      hours -= 24;
    }
    
    let newPeriod = hours >= 12 ? "PM" : "AM";
    let displayHours = hours % 12;
    if (displayHours === 0) displayHours = 12;
    
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${formattedMinutes} ${newPeriod}`;
  };

  const fetchSchedule = async () => {
    try {
      const response = await fetch("https://sargam.cusat.ac.in/app/api/schedules");
      const data = await response.json();
      
      const formattedSchedule = Object.values(data).map((day) => {
        const originalDate = new Date(day.Date);        
        const istDate = new Date(originalDate.getTime() + (5 * 60 + 30) * 60 * 1000);        
        const dayName = istDate.toLocaleDateString("en-US", { weekday: "long" });
        const dateString = istDate.toLocaleDateString("en-US", { day: "numeric", month: "short" });
        const events = Object.values(day.Stages).flatMap((stage) =>
          Object.values(stage.Events).map((event) => ({
            name: event.Event,
            time: convertToIST(event.Time),
            venue: stage.Stage,
          }))
        );

        return {
          day: dayName,
          date: dateString,
          events,
        };
      });

      setSchedule(formattedSchedule);
      setSelectedDay(formattedSchedule[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching schedule:", error);
      setLoading(false);
    }
  };

  const filteredEvents = selectedDay?.events.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVenue =
      selectedVenue === "All Venues" || event.venue.toLowerCase() === selectedVenue.toLowerCase();
    return matchesSearch && matchesVenue;
  });

  const venues = [
    "All Venues",
    ...new Set(schedule.flatMap((day) => day.events || []).map((event) => event.venue)),
  ].sort();

  if (!isMounted || loading) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="bg-black text-gray-200 min-h-screen relative mt-20">
        <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">
              Cochin University Arts Fest - Sargam 2025
            </h1>

            {/* Day selection */}
            <div className="mb-8 flex justify-center gap-3 overflow-x-auto no-scrollbar">
              {schedule.map((dayItem, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedDay(dayItem)}
                  className={`p-3 rounded-md min-w-[120px] transition-all ${
                    selectedDay?.day === dayItem.day
                      ? "bg-red-900/60 text-white font-semibold border border-red-500/40"
                      : "bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800 hover:border-red-900/40"
                  }`}
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 1 }}
                >
                  <div className="font-bold text-base">{dayItem.day}</div>
                  <div className="text-sm opacity-80">{dayItem.date}</div>
                </motion.button>
              ))}
            </div>

            {/* Search & Filter */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <motion.div className="relative w-full">
                <motion.input
                  type="text"
                  placeholder="Search events..."
                  className="p-3 pl-10 bg-gray-900 border border-gray-800 text-gray-200 rounded-md w-full focus:outline-none focus:border-red-900/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-3.5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.div>
              <motion.select
                className="p-3 bg-gray-900 border border-gray-800 rounded-md text-gray-200 w-full sm:max-w-xs focus:outline-none focus:border-red-900/50"
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
              >
                {venues.map((venue, index) => (
                  <option key={index} value={venue}>
                    {venue}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Events Grid */}
            <AnimatePresence>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents?.map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 border-l-2 border-l-red-800/40 border-t border-r border-b border-gray-800 text-gray-200 rounded-lg p-5"
                    whileHover={{ y: -2, backgroundColor: "rgb(23, 23, 23)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <h3 className="font-bold text-lg mb-3 text-gray-200">{event.name}</h3>
                    <div className="flex items-center mb-2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-red-400/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm">{event.time}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-red-400/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-sm">{event.venue}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {filteredEvents?.length === 0 && (
              <motion.div
                className="text-center py-12 bg-gray-900 border border-gray-800 rounded-lg mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-lg text-gray-300 mb-4">No events found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedVenue("All Venues");
                  }}
                  className="px-6 py-2 bg-red-900/60 text-white rounded-md hover:bg-red-800/70 transition-colors focus:outline-none"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;