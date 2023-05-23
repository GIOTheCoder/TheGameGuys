import { Outlet, Link } from "react-router-dom"

const ThankYou =()=> {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="thank-you-header text-center contact-section">
                        <h1 className="contact-header">Thank's For The Feedback</h1>
                        <Link to= {`/contact`}><button className="buy-button">Go Back</button></Link>
                    </div>
                    
                    
                </div>
            </div>
            <Outlet />
        </main>
    )
} 
export default ThankYou