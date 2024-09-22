import { Button } from "antd";
import { vitals } from "../../data";
import { IoIosArrowForward } from "react-icons/io";
import PressureGraph from "./components/PressureGraph";
import StepsGraph from "./components/StepsGraph";

export default function Measurements() {
    return (
        <div className="shadow-2xl rounded-xl p-5 w-[30rem] h-max">
            <span className="flex items-center mb-5">
                <h3 className="grow text-2xl font-bold">Measurements</h3>
                <Button type="link" className="font-bold text-lg">
                    All Signs
                    <IoIosArrowForward />
                </Button>
            </span>

            <div className="flex flex-col gap-5">
                {vitals.map((v, i) => <div tabIndex={0} className={`grid grid-cols-[auto_1fr] gap-x-5 border-4 transition-all duration-300 rounded-2xl hover:border-${v.color}-500 hover:shadow-${v.color}-200 hover:shadow-2xl focus:border-${v.color}-500 focus:shadow-${v.color}-200 focus:shadow-2xl outline-none border-solid p-5 measurement-card`} key={i}>

                    <div className="col-span-2 flex items-center">
                        <h2 className="grow text-2xl font-bold">{v.title}</h2>
                        <IoIosArrowForward size={23} />
                    </div>
                    <p>{v.last}</p>

                    <span className="col-[1/2] self-end">
                        <span className={`text-3xl font-bold text-${v.color}-500`}>{v.current}</span>
                        {v.type === 'steps' && <span className={`text-${v.color}-500`}> Steps</span>}
                        <p className={`text-${v.color}-500`}>{v.span}</p>
                    </span>

                    <div className="col-[2/3] row-[3/4]">
                        {v.type === 'bars' && <PressureGraph value={v.value} color={v.color} />}
                        {v.type === 'steps' && <StepsGraph value={v.value} color={v.color} />}
                    </div>
                </div>)}
            </div>
        </div>
    );
}
