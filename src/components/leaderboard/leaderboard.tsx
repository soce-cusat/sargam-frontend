import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, LabelList } from "recharts";

interface DataPoint {
  name: string;
  value: number;
  img: string;
}

interface CustomBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: DataPoint;
}

const data: DataPoint[] = [
  { name: "Zone1", value: 400, img: "/pattern1.jpg" },
  { name: "Zone2", value: 300, img: "/pattern2.jpg" },
  { name: "Zone3", value: 200, img: "/pattern1.jpg" },
  { name: "Zone4", value: 278, img: "/pattern2.jpg" },
  { name: "Zone5", value: 189, img: "/pattern1.jpg" },
  { name: "Zone6", value: 239, img: "/pattern2.jpg" },
  { name: "Zone7", value: 349, img: "/pattern1.jpg" },
  { name: "Zone8", value: 280, img: "/pattern2.jpg" },
];

const CustomBar: React.FC<CustomBarProps> = ({ x = 0, y = 0, width = 0, height = 0, payload }) => {
  if (!payload) return null;
  return (
    <g>
      <image href={payload.img} x={x} y={y} width={width} height={height} preserveAspectRatio="xMidYMid slice" />
    </g>
  );
};

const ImageBarChart: React.FC = () => {
  const [barSize, setBarSize] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setBarSize(screenWidth > 1200 ? 80 : screenWidth > 800 ? 60 : 40);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "100vw", overflow: "hidden", marginTop: "30px" }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 30, left: 0, right: 0, bottom: 10 }}>
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: "#ffffff" }} />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} barSize={barSize}>
            <LabelList dataKey="value" position="top" fill="white" fontSize={14} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImageBarChart;
