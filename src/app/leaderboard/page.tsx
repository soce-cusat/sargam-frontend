"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import Loading from "@/components/Loading";
const data = [
  { name: "1", value: 0 },
  { name: "2", value: 0 },
  { name: "3", value: 0 },
  { name: "4", value: 0 },
  { name: "5", value: 0 },
  { name: "6", value: 0 },
  { name: "7", value: 0 },
  { name: "8", value: 0 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#ffb6c1", "#4682b4", "#ff6347"];

export default function BarGraph() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    // Simulate loading or fetching data
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds (for example)
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <Header />
      {/* Responsive Leaderboard Heading */}
      <div className="h-30 w-full">

      </div>
      <h1 className={`font-bold mb-4 text-center text-white ${isMobile ? "text-3xl" : "text-8xl"}`}>
        Leaderboard
      </h1>
      <ResponsiveContainer width="90%" height={isMobile ? 400 : 500}>
        <BarChart
          layout={isMobile ? "vertical" : "horizontal"}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            type={isMobile ? "number" : "category"}
            dataKey={isMobile ? undefined : "name"}
            tick={{ fontSize: isMobile ? 12 : 14 }}
          />
          <YAxis
            type={isMobile ? "category" : "number"}
            dataKey={isMobile ? "name" : undefined}
            tick={{ fontSize: isMobile ? 12 : 14 }}
          />
          <Bar dataKey="value" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="value"
              position={isMobile ? "right" : "top"}
              fontSize={isMobile ? 12 : 14}
              fill="#ffffff"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
