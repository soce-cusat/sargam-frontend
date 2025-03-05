import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResponsiveBarGraph = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data: ChartData<"bar"> = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"], // Keys (labels) for the bars
    datasets: [
      {
        label: "Values",
        data: [12, 19, 3, 5, 2, 3, 15, 7], // Values for the bars
        backgroundColor: [
          "#f60000",
          "#c63733",
          "#6b1a17",
          "#980a0f",
          "#c51b00",
          "#ae0202",
          "#EB3B5A",
          "#00B894",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: isMobile ? "y" : "x", // Horizontal for mobile, vertical for desktop
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    scales: {
      x: {
        display: !isMobile, // Show x-axis for desktop
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: "white", // White color for the x-axis labels
        },
      },
      y: {
        display: true, // Show y-axis for both desktop and mobile
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: "white", // White color for the y-axis labels
        },
      },
    },
    animation: {
      duration: 1000, // Animation duration
    },
  };

  // Custom plugin to display values above/beside bars
  const barValueLabelsPlugin: Plugin<"bar"> = {
    id: "barValueLabels",
    afterDatasetsDraw: (chart) => {
      const ctx = chart.ctx;
      // Manually set the font and color to white
      ctx.font = "20px Arial"; // Set the font size and style (change as needed)
      ctx.fillStyle = "white"; // Set the font color to white
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((bar: any, index: number) => {
          const value = dataset.data[index];
          const x = bar.x;
          const y = bar.y;

          if (isMobile) {
            // For mobile (horizontal bars), place the value at the end of the bar
            const barWidth = bar.width; // Width of the bar
            ctx.fillText(value?.toString() || "", x + barWidth / 2, y);
          } else {
            // For desktop (vertical bars), place the value above the bar
            ctx.fillText(value?.toString() || "", x, y - 10);
          }
        });
      });
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "400px" : "500px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Bar
        data={data}
        options={options}
        plugins={[barValueLabelsPlugin]}
      />
    </div>
  );
};

export default ResponsiveBarGraph;
