import BarChart from "./BarChart";
import "./Chart.css";

function Chart(props) {
    const chartValues = props.dataPoints.map(d => d.value);
    const maxValue = Math.max(...chartValues);

    return (
        <div className="chart">
            {props.dataPoints.map(d =>
                <BarChart
                    key={d.label}
                    label={d.label}
                    value={d.value}
                    max={maxValue}
                />
            )}
        </div>
    );
}

export default Chart;