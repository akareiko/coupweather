export default function DailyForecast({ weatherData }) {
    if (!weatherData?.daily) {
        return <p className="text-sm text-gray-500">Loading...</p>;
    }

    return weatherData.daily.slice(0, 8).map((day, index) => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
        });
        const minTemp = (day.temp.min - 273.15).toFixed(0);
        const maxTemp = (day.temp.max - 273.15).toFixed(0);
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

        return (
            <div key={index} className="flex min-w-width items-center justify-between mb-2">
                <div className="w-[5%] font-semibold"><span>{date}</span></div>
                <div className="w-[12%]"><img src={iconUrl} alt={day.weather[0].description} className="w-8 h-8" /></div>
                <div className="w-[12%] text-gray-400 font-semibold">{minTemp}°</div>
                <div className="w-[12%] font-semibold"><span>{maxTemp}°</span></div>
            </div>
        );
    });
}
