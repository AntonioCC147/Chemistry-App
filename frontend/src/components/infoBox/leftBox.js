import './infoBox.css';

export default function LeftBox(props) {
    const information = props.information;

    return (
        <>
            <div className="info-container">
                <div className="vertical-left">{information}</div>
            </div>
        </>
    )
}