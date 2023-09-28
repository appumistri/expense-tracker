import "./Card.css";

function Card(props) {
    const className = props.className + " card";
    return (<div className={className}>{props.children}</div>);
}

export default Card;