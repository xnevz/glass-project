import { SVGProps } from "react";
import { daysCoeff, daysRange } from "../../../data";


type StepRectProps = SVGProps<SVGPathElement> & {
    i: number;
    value: number;
    color: string;
};

function DayLine({ i, value, color, ...props }: StepRectProps) {
    return <path
        d={`M${2 + i * daysCoeff},${20} L${2 + i * daysCoeff},${20 - value * 2}`}
        strokeWidth={2}
        strokeLinecap="round"
        {...props}
        className={`stroke-${color}-500  ${props.className ?? ''}`}
    />;
}


export default function StepsGraph({ value, color }: { value: number[], color: string; }) {
    return (
        <svg viewBox="0 0 100 20" height='100px' width='100%'>
            {value.map((v, i) => <DayLine key={v} value={v} color='gray-200 ' i={i} />)}
            {value.map((v, i) => <DayLine key={v} value={v} color={color} i={i}
                className="animated-day-line"
                style={{
                    transitionDelay: `${i * 30}ms`
                }}
            />)}

            <g className="graph-text">
                {daysRange.map((day, i) => (<text
                    key={i}
                    x={i * daysCoeff}
                    y="28"
                    className={"text-[5px] font-bold " + (i % 2 === 0 ? `fill-${color}-600` : 'fill-gray-400')}
                >{day}</text>))}
            </g>
        </svg>
    );
}
