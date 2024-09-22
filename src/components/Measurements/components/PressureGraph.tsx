import { useMemo } from "react";
import { vitalsRange } from "../../../data";


function getPathData(value: number[]) {
    return `M0, ${20 - value[0] * 2} L` + value.slice(1).map((v, i) => `${(i + 1) * 10},${20 - v * 2}`).join(' ');
}

export default function PressureGraph({ value, color }: { value: number[], color: string; }) {

    const data = useMemo(() => getPathData(value), [value]);

    return (
        <svg viewBox="0 0 100 20" height='100px' width='100%'>

            <path
                strokeWidth={2}
                className="stroke-gray-200"
                fill="none"
                d={data}
            />

            <path
                strokeWidth={2}
                className={`stroke-${color}-500 animated-path`}
                fill="none"
                d={data}
            />

            <g className="graph-text">
                {vitalsRange.map((i) => (<text
                    key={i}
                    x={i * 10}
                    y="28"
                    className={"text-[5px] font-bold " + (i % 2 === 0 ? `fill-${color}-700` : 'fill-gray-400')}
                >{i}</text>))}
            </g>
        </svg>
    );
}
