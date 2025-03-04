import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 100, color: "#bd5717", imageUrl: "/110.jpg" },
  { name: "B", value: 200, color: "#bd5717", imageUrl: "/110.jpg" },
  { name: "C", value: 150, color: "#bd5717", imageUrl: "/110.jpg" },
  { name: "D", value: 250, color: "#FF33A1", imageUrl: "/images/D.png" },
  { name: "E", value: 180, color: "#FFD700", imageUrl: "/images/E.png" },
  { name: "F", value: 220, color: "#00FFFF", imageUrl: "/images/F.png" },
  { name: "G", value: 130, color: "#FF8C00", imageUrl: "/images/G.png" },
  { name: "H", value: 300, color: "#8A2BE2", imageUrl: "/images/H.png" },
];

// Custom Bar Component
const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const { imageUrl, color, name } = payload;
  const imageHeight = 50; // Fixed height for the image
  const labelOffset = 20; // Space between image and label

  return (
    <g>
      {/* Colored Bar */}
      <rect x={x} y={y} width={width} height={height} fill={color} rx="5" ry="5" />
      {/* Image positioned below the bar */}
      <image href={imageUrl} x={x} y={y + height + 5} width={width} height={imageHeight} preserveAspectRatio="xMidYMid slice" />
      {/* Label below image */}
      <text x={x + width / 2} y={y + height + imageHeight + labelOffset} textAnchor="middle" fontSize="12" fill="#000">
        {name}
      </text>
    </g>
  );
};

const Leaderboard = () => {
  return (
    <div className="h-[80vh] sm:h-[100vh] w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: "black" }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 50, right: 30, left: 20, bottom: 80 }}>
          <XAxis dataKey="name" tick={false} />
          <YAxis domain={[0, 'dataMax']} />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Leaderboard;
