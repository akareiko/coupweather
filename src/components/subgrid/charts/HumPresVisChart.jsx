import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/utils/CustomTooltip';

function HumidityChart({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        humidity: hour.humidity, // Already in percentage
    }));

    return (
        <div className="w-[80vw] md:w-[50vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00C853" stopOpacity={1} />
                            <stop offset="95%" stopColor="#007FFF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <YAxis unit="%" axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="humidity"
                        stroke="#00C853"
                        fill="url(#humidityGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

function PressureChart({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        pressure: hour.pressure, // In hPa
    }));

    return (
        <div className="w-[80vw] md:w-[50vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
                    <defs>
                        <linearGradient id="pressureGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFC107" stopOpacity={1} />
                            <stop offset="95%" stopColor="#00BFFF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <YAxis unit="hPa" axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="pressure"
                        stroke="#FFC107"
                        fill="url(#pressureGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

function VisibilityChart({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false }),
        visibility: (hour.visibility / 1000).toFixed(1), // Convert to km
    }));

    return (
        <div className="w-[80vw] md:w-[50vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="visibilityGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#673AB7" stopOpacity={1} />
                            <stop offset="95%" stopColor="#00BFFF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#808080" strokeDasharray="3 3" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <YAxis unit="km" axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="visibility"
                        stroke="#673AB7"
                        fill="url(#visibilityGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export { HumidityChart, PressureChart, VisibilityChart };