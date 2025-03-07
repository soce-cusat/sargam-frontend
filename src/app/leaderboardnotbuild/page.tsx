"use client";
import Header from "@/components/header"
export default function Events() {
  return (
    <div className="min-h-screen">
      <Header/>
      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center bg-blue-600 text-white text-3xl font-bold">
        <h1>Welcome to the Events Page</h1>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center bg-green-600 text-white text-3xl font-bold">
        <h1>Discover Amazing Events</h1>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex items-center justify-center bg-red-600 text-white text-3xl font-bold">
        <h1>Join Us for More Exciting Experiences!</h1>
      </section>
    </div>
  );
}
