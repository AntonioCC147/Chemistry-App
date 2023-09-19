import Error404Img from '../../assets/images/Error404.png'

export default function Error404() {
    return (
        <div className="text-center">
            <img src={Error404Img} alt="Error 404" style={{width: "400px"}}/>
        </div>
    )
}