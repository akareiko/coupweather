import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer, 
    ReferenceDot,
    CartesianGrid
} from 'recharts';
import { CustomTooltip } from '@/components/utils/CustomTooltip';

export default function HourlyChart({ weatherData }) {
    if (!weatherData?.hourly || !weatherData.current) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    const chartData = weatherData.hourly.slice(0, 24).map((hour) => {
        const tempCelsius = (hour.temp - 273.15).toFixed(1);
        const timeLabel = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: false });
        return {
            time: timeLabel,
            temperature: parseFloat(tempCelsius),
        };
    });

    const currentTemp = parseFloat((weatherData.current.temp - 273.15).toFixed(1));
    const minTemp = Math.min(...chartData.map((hour) => hour.temperature));
    const maxTemp = Math.max(...chartData.map((hour) => hour.temperature));

    return (
        <div className="w-[80vw] md:w-[60vw] h-[50vh] md:h-[40vh]">
            <ResponsiveContainer>
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#007FFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#00BFFF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid 
                        stroke="#808080"
                        strokeDasharray="3 3"
                        // vertical={false}
                    />

                    <XAxis 
                        className="font-semibold" 
                        dataKey="time" 
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis 
                        className="font-semibold" 
                        unit="°" 
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip/>} />
                    <Area
                        type="monotone"
                        dataKey="temperature"
                        stroke="#007FFF"
                        fill="url(#temperatureGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === currentTemp)?.time}
                        y={currentTemp}
                        r={8} 
                        fill="black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `N`, position: "bottom", fontSize: 12 }}
                        
                    />

                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === currentTemp)?.time}
                        y={currentTemp}
                        r={3} 
                        fill="#fff"
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === minTemp)?.time}
                        y={minTemp}
                        r={8}
                        fill="#black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `L`, position: "bottom", fontSize: 12 }}
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === minTemp)?.time}
                        y={minTemp}
                        r={3}
                        fill="#fff"
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === maxTemp)?.time}
                        y={maxTemp}
                        r={8}
                        fill="#black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `H`, position: "top", fontSize: 12 }}
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperature === maxTemp)?.time}
                        y={maxTemp}
                        r={3}
                        fill="#fff"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
