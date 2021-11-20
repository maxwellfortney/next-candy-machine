import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import useCandyMachine from "../../hooks/useCandyMachine";

import "react-circular-progressbar/dist/styles.css";

export default function ProgressCircle() {
    const { nftsData } = useCandyMachine();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        let x = 0;
        setInterval(() => {
            x += 5;
            setPercent(x);
        }, 2000);
    }, []);

    return (
        <>
            <div
                className="absolute flex w-[50vw] min-w-[475px] lg:min-w-[575px] max-w-[750px]"
                style={{ aspectRatio: "1/1" }}
            >
                <CircularProgressbar
                    value={percent}
                    strokeWidth={1}
                    styles={buildStyles({
                        strokeLinecap: "flat",
                        pathColor: `#0CFF07`,
                    })}
                />
            </div>
        </>
    );
}

// const cleanPercentage = (percentage: number) => {
//     const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
//     const isTooHigh = percentage > 100;
//     return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
// };

// const Circle = ({
//     color,
//     percentage,
// }: {
//     color: string;
//     percentage: number;
// }) => {
//     const r = 500;
//     const circ = 2 * Math.PI * r;
//     const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.

//     return (
//         <circle
//             r={r}
//             cx={500}
//             cy={500}
//             fill="transparent"
//             stroke={strokePct !== circ ? color : ""} // remove colour as 0% sets full circumference
//             strokeWidth={7}
//             strokeDasharray={circ}
//             strokeDashoffset={percentage ? strokePct : 0}
//         ></circle>
//     );
// };

// const Text = ({ percentage }: { percentage: number }) => {
//     return (
//         <text
//             x="50%"
//             y="50%"
//             dominantBaseline="central"
//             textAnchor="middle"
//             fontSize={"1.5em"}
//         >
//             {percentage.toFixed(0)}%
//         </text>
//     );
// };

// const Pie = ({ color, percentage }: { color: string; percentage: number }) => {
//     const pct = cleanPercentage(percentage);

//     return (
//         <svg width={1000} height={1000} className="absolute z-20 top-1/2">
//             <g transform={`rotate(-90 ${"100 100"})`}>
//                 <Circle color="lightgrey" percentage={100} />
//                 <Circle color={color} percentage={pct} />
//             </g>
//             <Text percentage={pct} />
//         </svg>
//     );
// };
