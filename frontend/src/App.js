import Header from "./components/Header"
import Main from "./components/Main"
import Store from "./components/Store"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import SingleItem from "./components/SingleItem"
import Contact from "./components/Contact"


const App =()=> {

    const [gameArr, setGameArr] = useState([])
    // const [categoryArr, setCategoryArr] = useState([])
    // const [publisherArr, setPublisherArr] = useState([])
    
    useEffect(()=> {
    const url = 'http://localhost:8080/games'

    axios.get(url)
        .then(res => {
            setGameArr(res.data)
        })
    }, [])

    const [singleArr, setSingleArr] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:8080/games/findgames'

        axios.get(url)
            .then(res=> {
                setSingleArr(res.data)
            })
    }, [])


    // useEffect(()=> {
    //     const url = 'http://localhost:8080/category'
    
    //     axios.get(url)
    //         .then(res => {
    //             setCategoryArr(res.data)
    //         })
    //     }, [])
    
    //     useEffect(()=> {
    //         const url = 'http://localhost:8080/publisher'
        
    //         axios.get(url)
    //             .then(res => {
    //                 setPublisherArr(res.data)
    //                 // console.log(res.data)
    //             })
    //         }, [])

    // console.log(gameArr, publisherArr, categoryArr)

    return(
        <div>
            <Header />
            <div className="container">
                <Routes>
                        <Route path='/' index element={<Main props={gameArr} />} />
                        <Route path='/store' element={<Store props={gameArr} />} />
                        <Route path='/store/product/:id' element={<SingleItem />} />
                        <Route path='/contact' element={<Contact/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App