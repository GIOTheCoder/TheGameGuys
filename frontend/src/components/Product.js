import { Outlet, Link } from "react-router-dom"

const Product =(props)=> {
    
    return (
        <div className="col-md-3 d-flex justify-content-center">
        <figure className="figure store-figure text-center text-capitalize">
            <img src={props.image} alt="" className="figure-img img-fluid"/>
            <figcaption className="figcaption store-caption">{props.title}</figcaption>
            <figcaption className="figcaption store-caption">${props.price}</figcaption>
            {/* <figcaption class="figcaption store-caption">{props.system}</figcaption> */}
            <figcaption className="figcaption store-caption">{props.publisher}</figcaption>
            <Link to= {`/store/product/${props.id}`} key={props.id}><button className="button buy-button">View Details</button></Link>
        </figure>
        <Outlet />
    </div>
    )
}

export default Product