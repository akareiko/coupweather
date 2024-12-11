export function CustomTooltip({ payload, label, active }) {
    const tooltipClass = active ? "custom-tooltip custom-tooltip-active" : "custom-tooltip";
    return (
        active && payload && payload.length && (
            <div className={tooltipClass}>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-white">{`Value: ${payload[0].value}`}</p>
            </div>
        )
    );
}