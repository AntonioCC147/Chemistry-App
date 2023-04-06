import './infoBox.css';

export default function InfoBox(props) {
    const information = props.information;

    return (
        <>
            <div className="info-container">
                <div class = "vertical">{information}</div>
            </div>
        </>
    )
}