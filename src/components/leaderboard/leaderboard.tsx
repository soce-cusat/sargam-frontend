"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis,  ResponsiveContainer, Cell, LabelList } from "recharts";

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
          {/* <Tooltip /> */}
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
