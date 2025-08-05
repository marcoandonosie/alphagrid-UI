import React, { useRef, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from "recharts";

const UtilizationHistogram = ({
  siteUtilization = 6,
  nationalAvgUtilization = 18,
  percentileRank = 26,
  histogramData = [
    { bin: "0%", count: 50 },
    { bin: "10%", count: 40 },
    { bin: "20%", count: 30 },
    { bin: "30%", count: 20 },
    { bin: "40%", count: 15 },
    { bin: "50%", count: 10 },
    { bin: "60%", count: 5 },
    { bin: "70%", count: 2 },
    { bin: "80%", count: 1 },
    { bin: "90%", count: 0 },
  ]
}) => {
  // Find bin index
  const siteBinIndex = histogramData.findIndex((d) => {
    const binNum = parseInt(d.bin);
    return !isNaN(binNum) && binNum >= siteUtilization;
  });
  const highlightIndex = siteBinIndex === -1 ? 0 : siteBinIndex;

  // Ref and state for annotation positioning
  const chartRef = useRef(null);
  const [barPos, setBarPos] = useState(null);

  useEffect(() => {
    // After chart renders, find the highlighted bar's position
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('rect.recharts-rectangle');
      if (bars && bars[highlightIndex]) {
        const rect = bars[highlightIndex].getBoundingClientRect();
        const parentRect = chartRef.current.getBoundingClientRect();
        setBarPos({
          x: rect.x + rect.width / 2 - parentRect.x,
          y: rect.y - parentRect.y,
          width: rect.width,
          height: rect.height
        });
      }
    }
  }, [histogramData, highlightIndex]);

  return (
    <div style={{ width: "100%", padding: "1rem", position: "relative", background: "#121212", borderRadius: 12 }}>
      {/* Main Title */}
      <h2 style={{
        textAlign: "center",
        color: "#5A2D91",
        fontSize: "1.15rem",
        fontWeight: 600,
        margin: "0 0 0.5rem 0"
      }}>
        Your site outperforms {percentileRank}% stations nationally.
      </h2>
      {/* Summary Legend */}
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 4,
        marginRight: 8
      }}>
        <span style={{ color: "#999", fontSize: 12, fontWeight: 400 }}>
          National: {nationalAvgUtilization}%, Your Site: {siteUtilization}%
        </span>
      </div>
      {/* Subtitle */}
      <p style={{ textAlign: "center", color: "#999", fontSize: 13, margin: 0 }}>
        National Avg: {nationalAvgUtilization}% | Your Site: {siteUtilization}%
      </p>
      <div style={{ width: "100%", height: 300, position: "relative" }} ref={chartRef}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={histogramData} margin={{ bottom: 32 }}>
            <XAxis
              dataKey="bin"
              tick={{ fill: "#ccc", fontSize: 12 }}
              axisLine={{ stroke: "#444" }}
              tickLine={false}
            >
              {/* X-Axis Label */}
              <text
                x={150}
                y={270}
                textAnchor="middle"
                fontSize="12"
                fontWeight="400"
                fill="#999"
                style={{ pointerEvents: "none" }}
              >
                Utilization (%)
              </text>
            </XAxis>
            <YAxis tick={{ fill: "#ccc", fontSize: 12 }} axisLine={{ stroke: "#444" }} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#232323", border: "1px solid #444", color: "#fff" }}
              labelStyle={{ color: "#C4A7E7" }}
              itemStyle={{ color: "#fff" }}
              cursor={{ fill: "rgba(124, 87, 194, 0.15)" }}
            />
            <Bar dataKey="count">
              {histogramData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === highlightIndex ? "#5A2D91" : "#C4A7E7"}
                />
              ))}
              <LabelList
                dataKey="count"
                position="top"
                formatter={(value, index) => ""}
                style={{ fill: "#5A2D91", fontSize: "12px" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {/* Annotation overlay */}
        {barPos && (
          <svg
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              pointerEvents: "none",
              width: "100%",
              height: 300,
              overflow: "visible"
            }}
            width="100%"
            height={300}
          >
            {/* Label */}
            <text
              x={barPos.x}
              y={barPos.y - 24}
              textAnchor="middle"
              fontSize="12"
              fontWeight="400"
              fill="#ccc"
              style={{ filter: "drop-shadow(0 1px 2px #121212)" }}
            >
              Your Site
            </text>
            {/* Arrow */}
            <line
              x1={barPos.x}
              y1={barPos.y - 18}
              x2={barPos.x + 18}
              y2={barPos.y}
              stroke="#bbb"
              strokeWidth={1.5}
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 Z" fill="#bbb" />
              </marker>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default UtilizationHistogram;
