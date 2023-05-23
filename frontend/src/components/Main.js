import Product from "./Product"
import banner from "../images/GameGuysBanner.jpg"
import { Outlet, Link } from "react-router-dom"


const Main =(props)=> {

    const arr = props.props
    // console.log(arr)


    const bestSellers = arr.filter(item => {
        
        return item.category_id === 1
    }).map(item => {
        return (
            <Product 
                key = {item.game_id}
                id = {item.game_id}
                title = {item.title}
                price = {item.price}
                image = {item.image}
            />
        )
    })

    const newReleases = arr.filter(item => {
        
        return item.category_id === 2
    }).map(item => {
        return (
            <Product 
                key = {item.game_id}
                id = {item.game_id}
                title = {item.title}
                price = {item.price}
                image = {item.image}
            />
        )
    })


    return (
        <main className="main">
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                    <Link to= {`/store/product/9`} key={props.id}><img src={banner} alt="hero image" className="hero-img img-fluid"  /> </Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </section>    
    <section className="best-seller-section">
        <div className="container">
            <div className="row justify-content-center justify-content-md-start">
                <div>
                    <h2 className="main-header best-sellers-header">
                        Best Sellers
                    </h2>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row flex-md-row flex-column text-capitalize">
                        {bestSellers}
            </div>
        </div>
    </section>

    <section className="new-releases-section">
        <div className="container">
            <div className="row justify-content-center justify-content-md-start">
                <div>
                    <h2 className="main-header new-releases-header">
                        New Releases
                    </h2>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row flex-md-row flex-column text-capitalize">
                        {newReleases}
            </div>
        </div>
    </section>




    </main>
    )
}

export default Main