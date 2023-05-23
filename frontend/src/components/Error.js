import image from "../images/404.gif"

const Error =()=> {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <img className="error-img img-fluid" src={image} alt="404 image"/>
            </div>
        </div>
    )
}

export default Error