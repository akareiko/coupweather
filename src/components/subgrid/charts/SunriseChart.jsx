import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/utils/CustomTooltip';

export default function SunriseSunsetChart({ weatherData }) {
    if (!weatherData?.hourly || !weatherData?.current) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const sunrise = new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], {
        hour: 'numeric',
        hour12: false,
    });
    const sunset = new Date(weatherData.current.sunset * 1000).toLocaleTimeString([], {
        hour: 'numeric',
        hour12: false,
    });

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        dummy: 1, // Placeholder for consistent chart structure
    }));

    return (
        <div className="w-[80vw] md:w-[30vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <LineChart data={chartData}>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip/>} />
                    <Line type="monotone" dataKey="dummy" stroke="transparent" />
                    <ReferenceLine x={sunrise} label="Sunrise" stroke="#FFDB58" strokeWidth={6} />
                    <ReferenceLine x={sunset} label="Sunset" stroke="#DC143C" strokeWidth={6} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}