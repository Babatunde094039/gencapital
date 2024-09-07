// import { Tooltip } from "antd";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const months = [
  "Jan '24",
  "Feb '24",
  "Mar '24",
  "Apr '24",
  "May '24",
  "Jun '24",
  "Jul '24",
  "Aug '24",
  "Sep '24",
  "Oct '24",
  "Nov '24",
  "Dec '24",
];

const data = [
  {
    "name": "Sep '23",
    "amount": 0,
  },
  {
    "name": "Oct '23",
    "amount": 90,
  },
  {
    "name": "Nov '23",
    "amount": 30,
  },
  {
    "name": "Dec '23",
    "amount": 120,
  },
  {
    "name": "Jan '24",
    "amount": 50,
  },
  {
    "name": "Feb '24",
    "amount": 60,
  },
  {
    "name": "Mar '24",
    "amount": 20,
  },
  {
    "name": "Apr '24",
    "amount": 80,
  },
  {
    "name": "May '24",
    "amount": 10,
  },
  {
    "name": "Jun '24",
    "amount": 100,
  },
  {
    "name": "Jul '24",
    "amount": 20,
  },
  {
    "name": "Aug '24",
    "amount": 124,
  },
]

// const data = months.map((month, index) => ({
//   name: month,
//   // uv: Math.floor(Math.random() * 121), 
//   uv: [0, 30, 25, 35, 20, 38, 38, 50, 70, 80, 95, 112,  ], 
//   // amount: 
 
// }));

// Custom Tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#fff", color:'#000000', fontSize:'13px', fontWeight:'600', border: "1px solid #ccc", padding: "5px" }}>
        <p style={{ margin: 0 }}>{`$${payload[0].value}`}</p> {/* Display only the Y-axis value */}
      </div>
    );
  }
  return null;
};



const ChartComponent = () => {
  return (
    <div className="py-[43px] px-[11px] rounded-[12px] !bg-white">
      <ResponsiveContainer width="100%" height={426}>
        <AreaChart
         
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="!text-[11px] 2xl:!text-[13px] font-[100]"
        >
          <CartesianGrid strokeDasharray="13 6" vertical={false} stroke="#ededee" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#2EB200" stopOpacity={0.1}/>
                 <stop offset="95%" stopColor="#2EB200" stopOpacity={0}/>
              </linearGradient>
            </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 40, right: 0 }}/>
          <YAxis className="" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
          {/* <Tooltip formatter={(value) => [`$${value}`, '']}/> */}
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="amount" stroke="#2EB200" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)"  />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;