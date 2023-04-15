import './infoBox.css';

export default function LeftBox(props) {
    const information = props.information;

    return (
        <>
            <div className="left-container">
                <div className="vertical-left">{information}</div>
            </div>
        </>
    )
}