export default function HourlyForecast({ weatherData }) {
    if (!weatherData?.hourly) {
        return <p className="text-sm text-gray-500">Loading...</p>;
    }

    const hours = weatherData.hourly.slice(0, 12);
    const now = 'Now';
    const hourLabels = [now, ...hours.slice(1).map((hour) => {
        let hourLabel = new Date(hour.dt * 1000).getHours();
        return hourLabel < 10 ? `0${hourLabel}:00` : `${hourLabel}:00`;
    })];

    const hourlyItems = hours.map((hour, index) => {
        const hourLabel = hourLabels[index];
        const temp = (hour.temp - 273.15).toFixed(1);
        const iconSrc = `https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`;
        const iconAlt = hour.weather[0].description;

        return (
            <div key={hour.dt} className="flex items-center space-x-2">
                <div className="flex flex-col items-center">
                    <span>{hourLabel}</span>
                    <img
                        src={iconSrc}
                        alt={iconAlt}
                        className="w-8 h-8 mb-1"
                    />
                    <div className="font-semibold">{temp}°</div>
                </div>
            </div>
        );
    });

    return (
        <div className="flex justify-between items-center space-x-4">
            {hourlyItems}
        </div>
    );
}
