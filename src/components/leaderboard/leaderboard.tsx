"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import Loading from "@/components/Loading";

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#ffb6c1", "#4682b4", "#ff6347"];
const API_URL = "https://sargam.cusat.ac.in/app/api/score";

export default function BarGraph() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [animateKey, setAnimateKey] = useState(0); // For restarting animation on update

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      const formattedData = result.results.map((item: { zone: string; score: number }) => ({
        name: item.zone,
        value: item.score,
      }));
      setData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
      setAnimateKey((prev) => prev + 1); // Restart animation on update
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 my-32">
      <Header />
      <h1 className={`font-bold mb-4 text-center text-white ${isMobile ? "text-3xl" : "text-8xl"}`}>
        Leaderboard
      </h1>
      <ResponsiveContainer width="90%" height={isMobile ? 400 : 500}>
        <BarChart
          key={animateKey}
          layout={isMobile ? "vertical" : "horizontal"}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            type={isMobile ? "number" : "category"}
            dataKey={isMobile ? undefined : "name"}
            tick={{ fontSize: isMobile ? 12 : 14, fill: "#fff" }}
          />
          <YAxis
            type={isMobile ? "category" : "number"}
            dataKey={isMobile ? "name" : undefined}
            tick={{ fontSize: isMobile ? 12 : 14, fill: "#fff" }}
          />
          <Bar
            dataKey="value"
            radius={isMobile ? [0, 10, 10, 0] : [10, 10, 0, 0]} // Rounded corners
            animationDuration={2000}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            {/* Updated: Use "right" for mobile and "top" for desktop */}
            <LabelList
              dataKey="value"
              position={isMobile ? "right" : "top"}
              fontSize={isMobile ? 14 : 18}
              fontWeight="bold"
              fill="#ffffff"
              offset={5} // Small offset for clarity
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}