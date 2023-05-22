import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from "axios"




const SingleItem =()=> {

    const [item, setItem] = useState([])
    const params = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    const url = `http://localhost:8080/games/${params.id}`

    useEffect(()=>{
        axios.get(url)
            .then(res=> {
                setItem(res.data)
            })
    }, [])

    console.log(item)

    return (
    <main className="main">
    <div className="section section main-section game-single">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={item.image} alt="" className="game-image img-fluid" />
                </div>

                <div className="col-md-6 game-description text-center">
                    <h1 className="text-uppercase game-name">{item.title}</h1>
                    <p>
                        {item.description}
                    </p>

                    <p className="rating">${item.price} | Rated: {item.rating} | {item.year}</p>

                    <button className="buy-button">Buy Now</button>
                </div>

            </div>
        </div>

    </div>
</main>

    )
}

export default SingleItem