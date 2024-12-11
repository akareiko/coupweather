import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot,
    CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/utils/CustomTooltip';

export default function UVIndexChart({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        uvIndex: hour.uvi,
    }));

    return (
        <div className="w-[80vw] md:w-[60vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FFA500" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="uvIndex"
                        stroke="#FFA500"
                        fill="url(#uvGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}