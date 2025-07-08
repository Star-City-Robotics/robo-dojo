import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface ChartProps {
  type?: "bar" | "pie" | "line";
  data?: any[];
  title?: string;
  width?: number;
  height?: number;
}

// Default data for different chart types
const defaultBarData = [
  { name: "Java", popularity: 85, difficulty: 70 },
  { name: "Python", popularity: 92, difficulty: 45 },
  { name: "JavaScript", popularity: 88, difficulty: 55 },
  { name: "C++", popularity: 65, difficulty: 85 },
  { name: "Go", popularity: 70, difficulty: 60 },
];

const defaultPieData = [
  { name: "Frontend", value: 35, color: "#4ec9b0" },
  { name: "Backend", value: 30, color: "#569cd6" },
  { name: "Mobile", value: 20, color: "#dcdcaa" },
  { name: "DevOps", value: 15, color: "#ce9178" },
];

const defaultLineData = [
  { month: "Jan", beginners: 120, intermediate: 80, advanced: 30 },
  { month: "Feb", beginners: 150, intermediate: 95, advanced: 40 },
  { month: "Mar", beginners: 180, intermediate: 110, advanced: 55 },
  { month: "Apr", beginners: 220, intermediate: 130, advanced: 70 },
  { month: "May", beginners: 280, intermediate: 160, advanced: 85 },
  { month: "Jun", beginners: 320, intermediate: 190, advanced: 100 },
];

export const MDXChart = ({
  type = "bar",
  data,
  title = "Interactive Chart",
  width = 600,
  height = 400,
}: ChartProps) => {
  const chartData =
    data ||
    (type === "pie"
      ? defaultPieData
      : type === "line"
        ? defaultLineData
        : defaultBarData);

  const renderChart = () => {
    switch (type) {
      case "pie":
        return (
          <PieChart width={width} height={height}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${((percent || 0) * 100).toFixed(0)}%`
              }
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.color ||
                    `#${Math.floor(Math.random() * 16777215).toString(16)}`
                  }
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );

      case "line":
        return (
          <LineChart width={width} height={height} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3e3e42" />
            <XAxis dataKey="month" stroke="#cccccc" />
            <YAxis stroke="#cccccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2d2d30",
                border: "1px solid #3e3e42",
                borderRadius: "6px",
                color: "#cccccc",
              }}
            />
            <Line
              type="monotone"
              dataKey="beginners"
              stroke="#4ec9b0"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="intermediate"
              stroke="#569cd6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="advanced"
              stroke="#dcdcaa"
              strokeWidth={3}
            />
          </LineChart>
        );

      default: // bar chart
        return (
          <BarChart width={width} height={height} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3e3e42" />
            <XAxis dataKey="name" stroke="#cccccc" />
            <YAxis stroke="#cccccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2d2d30",
                border: "1px solid #3e3e42",
                borderRadius: "6px",
                color: "#cccccc",
              }}
            />
            <Bar dataKey="popularity" fill="#4ec9b0" />
            <Bar dataKey="difficulty" fill="#ce9178" />
          </BarChart>
        );
    }
  };

  return (
    <div className="bg-[#1e1e1e] my-8 p-6 border border-[#3e3e42] rounded-lg">
      <h3 className="mb-4 font-bold text-[#dcdcaa] text-lg text-center">
        {title}
      </h3>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={height}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
      <p className="opacity-75 mt-4 text-[#cccccc] text-sm text-center">
        ✨ This interactive chart is rendered directly in MDX!
      </p>
    </div>
  );
};
