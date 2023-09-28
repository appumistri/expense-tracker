import "./BarChart.css";

function BarChart(props) {
    let barFill = '0%';

    if (props.max > 0) {
        barFill = Math.round((props.value / props.max) * 100);   
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFill}} />
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default BarChart;