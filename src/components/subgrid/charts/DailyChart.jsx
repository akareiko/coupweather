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

export default function DailyChart({ weatherData }) {
    if (!weatherData?.daily || !weatherData.current) {
        return <p className="text-sm text-gray-400">Loading...</p>;
    }

    // Map daily data to chartData with date labels and temperature values
    const chartData = weatherData.daily.slice(0, 7).map((day) => {
        const tempCelsiusMin = (day.temp.min - 273.15).toFixed(1);
        const tempCelsiusMax = (day.temp.max - 273.15).toFixed(1);
        const timeLabel = new Date(day.dt * 1000).toLocaleDateString([], { weekday: 'short' });

        return {
            time: timeLabel,
            temperatureMin: parseFloat(tempCelsiusMin),
            temperatureMax: parseFloat(tempCelsiusMax),
        };
    });

    const currentTemp = parseFloat((weatherData.current.temp - 273.15).toFixed(1));
    const minTemp = Math.min(...chartData.map((day) => day.temperatureMin));
    const maxTemp = Math.max(...chartData.map((day) => day.temperatureMax));


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
                        <linearGradient id="temperatureGradientTwo" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00BFFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#007FFF" stopOpacity={0.5} />
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
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="temperatureMax"
                        stroke="#007FFF"
                        fill="url(#temperatureGradient)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />
                    <Area
                        type="monotone"
                        dataKey="temperatureMin"
                        stroke="#00BFFF"
                        fill="url(#temperatureGradientTwo)"
                        strokeWidth={6}
                        baseValue="dataMin"
                    />

                    {/* ReferenceDots for current, min, and max temperatures */}
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMax === currentTemp)?.time}
                        y={currentTemp}
                        r={8} 
                        fill="black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `N`, position: "bottom", fontSize: 12 }}
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMax === currentTemp)?.time}
                        y={currentTemp}
                        r={3} 
                        fill="#fff"
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMin === minTemp)?.time}
                        y={minTemp}
                        r={8}
                        fill="#black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `L`, position: "bottom", fontSize: 12 }}
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMin === minTemp)?.time}
                        y={minTemp}
                        r={3}
                        fill="#fff"
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMax === maxTemp)?.time}
                        y={maxTemp}
                        r={8}
                        fill="#black"
                        stroke="black"
                        strokeWidth={1} 
                        label={{ value: `H`, position: "top", fontSize: 12 }}
                    />
                    <ReferenceDot
                        x={chartData.find((d) => d.temperatureMax === maxTemp)?.time}
                        y={maxTemp}
                        r={3}
                        fill="#fff"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
