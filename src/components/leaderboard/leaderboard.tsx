"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 700 },
  { name: "C", value: 200 },
  { name: "D", value: 900 },
  { name: "E", value: 500 },
  { name: "F", value: 600 },
  { name: "G", value: 300 },
  { name: "H", value: 800 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#ffb6c1", "#4682b4", "#ff6347"];

export default function BarGraph() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center p-4">
      <ResponsiveContainer width="100%" height={isMobile ? 400 : 500}>
        <BarChart
          layout={isMobile ? "vertical" : "horizontal"}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            type={isMobile ? "number" : "category"}
            dataKey={isMobile ? undefined : "name"}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            type={isMobile ? "category" : "number"}
            dataKey={isMobile ? "name" : undefined}
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Bar dataKey="value" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="value"
              position={isMobile ? "right" : "top"}
              fontSize={14}
              fill={isMobile ? "#ffffff" : "#ffffff"}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
