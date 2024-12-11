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

export default function FeelsLikeChart({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        feelsLike: (hour.feels_like - 273.15).toFixed(1),
    }));

    return (
        <div className="w-[80vw] md:w-[60vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="feelsLikeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00BFFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#00FFFF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <YAxis unit="°" axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="feelsLike"
                        stroke="#00BFFF"
                        fill="url(#feelsLikeGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}